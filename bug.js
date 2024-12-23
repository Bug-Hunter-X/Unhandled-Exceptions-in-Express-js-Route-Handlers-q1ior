const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Assume 'req.body' contains user data
  // ... some processing ...
  // Missing error handling here.  If the processing fails,
  // an unhandled exception will crash the server.
  res.status(201).send();
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});