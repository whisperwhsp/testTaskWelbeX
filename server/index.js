const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
  response.send('WHATS UP BROO!');
});

app.listen(PORT, () => {
  console.log('SERVER STARTED ON PORT: ', PORT);
});
