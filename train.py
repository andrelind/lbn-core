from torch.utils.tensorboard import SummaryWriter
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader
import torchvision
import numpy as np
from sklearn.model_selection import train_test_split

############## TENSORBOARD ########################
import sys
import torch.nn.functional as F
from torch.utils.tensorboard import SummaryWriter
# default `log_dir` is "runs" - we'll be more specific here
writer = SummaryWriter('runs/xwing1')
###################################################

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')


print("Loading...")
print("-- CSV")
raw = np.loadtxt('./data.csv', delimiter=",",
                 dtype=np.float32, skiprows=1)
xx = raw[:, 1:]
yy = raw[:, [0]]

x_train, x_test, y_train, y_test = train_test_split(xx, yy, test_size=0.15)


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
    def __init__(self, input_size, h1_size, h2_size, num_classes):
        super(NeuralNet, self).__init__()
        self.input_size = input_size
        self.l1 = nn.Linear(input_size, h1_size)
        self.l2 = nn.Linear(h1_size, h2_size)
        self.l3 = nn.Linear(h2_size, num_classes)

    def forward(self, x):
        out = self.l1(x)
        out = self.l2(out)
        out = self.l3(out)
        return out


print("-- datasets")
train_set = XWingDataset(x_train, y_train)
test_set = XWingDataset(x_test, y_test)

############## TENSORBOARD ########################
img_grid = torchvision.utils.make_grid(train_set.x)
writer.add_image('xwing', img_grid)
# writer.close()
# sys.exit()
###################################################

num_epochs = 300
input_size = 945
h1_size = 500
h2_size = 250
num_classes = 1
batch_size = 100
learning_rate = 0.001

print("-- model")
model = NeuralNet(input_size, h1_size, h2_size, num_classes).to(device)
print("-- criterion")
criterion = nn.MSELoss()
# criterion = nn.CrossEntropyLoss()
print("-- optimizer")
# optimizer = torch.optim.SGD(model.parameters(), lr=learning_rate)
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

############## TENSORBOARD ########################
writer.add_graph(model, train_set.x)
# writer.close()
# sys.exit()
###################################################

# Train the model
running_loss = 0.0
running_correct = 0
n_total_steps = len(train_set)
print("Start training")
model.train()
for epoch in range(num_epochs):
    train_loss = 0.0
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
        clamped = max(0.0, min(round(predicted, 0), 1.0))

        running_correct += (clamped == labels).sum().item()
        # train_loss = loss.item() * data.size(0)

        if (i+1) % 100 == 0:
            print(
                f'Epoch [{epoch+1}/{num_epochs}], Step [{i+1}/{n_total_steps}], Loss: {loss.item():.4f}')
            ############## TENSORBOARD ########################
            writer.add_scalar('training loss', running_loss /
                              100, epoch * n_total_steps + i)
            running_accuracy = running_correct / 100 / (clamped + 0.001)
            writer.add_scalar('accuracy', running_accuracy,
                              epoch * n_total_steps + i)
            running_correct = 0
            running_loss = 0.0
            ###################################################
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

        clamped = max(0.0, min(round(predicted, 0), 1.0))

        print(f'{predicted} - {clamped} vs {labels[0]}')

        n_samples += labels.size(0)
        n_correct += clamped == labels[0]
        # n_correct += (predicted == labels).sum().item()

    acc = 100.0 * n_correct / n_samples
    print(f'Accuracy of the network: {acc}%')
