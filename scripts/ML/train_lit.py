from torch.utils.tensorboard import SummaryWriter
import torch
import torch.nn as nn
from torch.nn import functional as F

from torch.utils.data import Dataset, DataLoader
import torchvision
import numpy as np
from sklearn.model_selection import train_test_split
import pytorch_lightning as pl
import csv


num_epochs = 1000
input_size = 187
h1_size = 100
h2_size = 50
h3_size = 50
num_classes = 1
batch_size = 64
learning_rate = 0.0001


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


class LitAutoEncoder(pl.LightningModule):
    def __init__(self):
        super().__init__()
        self.encoder = nn.Sequential(
            nn.Linear(input_size, h1_size),
            nn.Linear(h1_size, h2_size),
            nn.Linear(h2_size, h3_size),
            nn.Linear(h3_size, num_classes))
        self.decoder = nn.Sequential(
            nn.Linear(num_classes, h3_size),
            nn.Linear(h3_size, h2_size),
            nn.Linear(h2_size, h1_size),
            nn.Linear(h1_size, input_size))

    def forward(self, x):
        embedding = self.encoder(x)
        return embedding

    def configure_optimizers(self):
        optimizer = torch.optim.Adam(self.parameters(), lr=1e-3)
        return optimizer

    def training_step(self, train_batch, batch_idx):
        x, y = train_batch
        # x = x.view(x.size(0), -1)
        z = self.encoder(x)
        # x_hat = self.decoder(z)
        # loss = F.mse_loss(x_hat, x)
        loss = F.mse_loss(z, y)
        self.log('train_loss', loss)
        return loss

    def validation_step(self, val_batch, batch_idx):
        x, y = val_batch
        # x = x.view(x.size(0), -1)
        z = self.encoder(x)
        # x_hat = self.decoder(z)
        # loss = F.mse_loss(x_hat, x)
        loss = F.mse_loss(z, y)
        self.log('val_loss', loss)


print("Loading CSV")
raw = np.loadtxt('./scripts/ML/pilots.csv', delimiter=",",
                 dtype=np.float32, skiprows=1)
xx = raw[:, 1:]
yy = raw[:, [0]]

x_train = xx[:400]
x_val = xx[401:]

y_train = yy[:400]
y_val = yy[401:]

train_dataset = XWingDataset(x_train, y_train)
val_dataset = XWingDataset(x_val, y_val)

train_loader = DataLoader(train_dataset, batch_size=batch_size)
val_loader = DataLoader(val_dataset, batch_size=batch_size)

# model
model = LitAutoEncoder()

if __name__ == "__main__":
    # training
    trainer = pl.Trainer(max_epochs=num_epochs)
    trainer.fit(model, train_loader, val_loader)

    orig = np.loadtxt('./scripts/ML/pilots_orig.csv', delimiter=",",
                      dtype=np.float32, skiprows=1)
    eval_x = torch.from_numpy(orig[:, 1:])

    f = open('./scripts/ML/pilots_results.csv', 'w')
    writer = csv.writer(f)

    for i, (data) in enumerate(eval_x):
        data = data
        outputs = model(data)

        predicted = outputs.data[0].item()
        writer.writerow([round(predicted * 255)])
    f.close()
