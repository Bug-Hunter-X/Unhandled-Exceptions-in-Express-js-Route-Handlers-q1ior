const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    // ... some processing ...
    // Example of potential error:
    // if (!req.body.name) { throw new Error('Name is required'); }
    res.status(201).send();
  } catch (error) {
    console.error('Error processing user:', error);
    res.status(500).send('Error creating user');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});