from torch.utils.tensorboard import SummaryWriter
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader
import torchvision
import numpy as np

import pytorch_lightning as pl
import csv


device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')


print("Loading...")
print("-- CSV")
raw = np.loadtxt('./pilots.csv', delimiter=",",
                 dtype=np.float32, skiprows=1)
xx = raw[:, 1:]
yy = raw[:, [0]]

x_train = xx[:427]
x_test = xx[428:]

y_train = yy[:427]
y_test = yy[428:]


class XWingDataset(Dataset):
    def __init__(self, x, y):
        super().__init__()
        self.x = torch.from_numpy(x)
        self.y = torch.from_numpy(y)
        self.n_samples = x.shape[0]

    def __getitem__(self, index):
        return self.x[index], self.y[index]

    def __len__(self):
        return self.n_samples


class NeuralNet(nn.Module):
    def __init__(self, input_size, h1_size, h2_size, h3_size, num_classes):
        super(NeuralNet, self).__init__()
        self.input_size = input_size
        self.l1 = nn.Linear(input_size, h1_size)
        self.l2 = nn.Linear(h1_size, h2_size)
        # self.l3 = nn.Linear(h2_size, num_classes)
        self.l3 = nn.Linear(h2_size, h3_size)
        self.l4 = nn.Linear(h3_size, num_classes)

    def forward(self, x):
        out = self.l1(x)
        out = self.l2(out)
        out = self.l3(out)
        out = self.l4(out)
        return out


print("-- datasets")
train_set = XWingDataset(x_train, y_train)
test_set = XWingDataset(x_test, y_test)


num_epochs = 100
input_size = 187
h1_size = 100
h2_size = 50
h3_size = 50
num_classes = 1
batch_size = 64
learning_rate = 0.0001

print("-- model")
model = NeuralNet(input_size, h1_size, h2_size,
                  h3_size, num_classes).to(device)
print("-- criterion")
criterion = nn.MSELoss()
# criterion = nn.CrossEntropyLoss()
print("-- optimizer")
# optimizer = torch.optim.SGD(model.parameters(), lr=learning_rate)
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)


# Train the model
running_loss = 0.0
running_correct = 0
n_total_steps = len(train_set)
print("Start training")
model.train()
for epoch in range(num_epochs):
    for i, (data, labels) in enumerate(train_set):
        data = data.to(device)
        labels = labels.to(device)

        # Forward pass
        outputs = model(data)
        loss = criterion(outputs, labels)

        # Backward and optimize
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        running_loss += loss.item()
        predicted = outputs.data[0].item()

        running_correct += (predicted == labels).sum().item()
        # running_correct = loss.item() * data.size(0)

        if (i+1) % 100 == 0:
            print(
                f'Epoch [{epoch+1}/{num_epochs}], Step [{i+1}/{n_total_steps}], Loss: {loss.item():.6f}')

    # print(f'Epoch {epoch+1} \t Training Loss: {train_loss / len(train_set)}')

model.eval()
with torch.no_grad():
    n_correct = 0
    n_samples = 0
    for i, (data, labels) in enumerate(test_set):
        data = data.to(device)
        labels = labels.to(device)
        outputs = model(data)

        # max returns (value ,index)
        # _, predicted = torch.max(outputs.data)
        predicted = outputs.data[0].item()

        n_samples += labels.size(0)
        n_correct += round(predicted, 2) == round(labels[0].item(), 2)
        # print(round(predicted, 2), round(labels[0].item(), 2))
        # n_correct += (predicted == labels).sum().item()

    acc = 100.0 * n_correct / n_samples
    print(f'Accuracy of the network: {acc}%')


orig = np.loadtxt('./pilots_orig.csv', delimiter=",",
                  dtype=np.float32, skiprows=1)
eval_x = torch.from_numpy(orig[:, 1:])

f = open('./pilots_results.csv', 'w')
writer = csv.writer(f)

for i, (data) in enumerate(eval_x):
    data = data.to(device)
    labels = labels.to(device)
    outputs = model(data)

    predicted = outputs.data[0].item()
    writer.writerow([round(predicted * 255)])
    # writer.writerow([predicted])

    # print(predicted, round(predicted * 255))

f.close()
