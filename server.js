const express = require('express');
const app = express();
const path = require('path');

app.use(express.json()); // Allows us to handle JSON data
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a GET route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a POST route to accept data from the front-end
app.post('/api/data', (req, res) => {
  const { name, age } = req.body;
  res.send(`Received data: Name - ${name}, Age - ${age}`);
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
