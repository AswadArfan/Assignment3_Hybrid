const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let items = [];
let users = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const item = req.body;
  item.id = items.length + 1;
  items.push(item);
  res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  items = items.map(item => (item.id === parseInt(id) ? updatedItem : item));
  res.status(200).json(updatedItem);
});

app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  items = items.filter(item => item.id !== parseInt(id));
  res.status(204).send();
});

app.post('/signup', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: 'User created' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.status(200).json({ message: 'User authenticated' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
