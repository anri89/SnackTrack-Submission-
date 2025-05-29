const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

let customSnacks = [];

app.get('/api/snacks', (req, res) => {
  const snacks = require('./data/snacks.json');
  res.json([...snacks, ...customSnacks]);
});

app.post('/api/snacks', (req, res) => {
  const { name, carbs, sugar = '', protein = '' } = req.body;
  if (!name || !carbs) {
    return res.status(400).json({ error: 'Name and carbs are required.' });
  }
  customSnacks.push({ name, carbs, sugar, protein });
  res.status(201).json({ message: 'Snack added successfully!' });
});

app.listen(port, () => {
  console.log(`SnackTrack server running at http://localhost:${port}`);
});
