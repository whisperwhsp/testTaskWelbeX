const express = require('express');
const cors = require('cors');
const tableRouter = require('./routes/table.routes');

const PORT = 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', tableRouter);
app.use(express.static(`${__dirname}/public`));
app.use('/', (req, res) => {
  res.sendFile(`${__dirname}\\public\\index.html`);
});

app.listen(PORT, () => {
  console.log('SERVER STARTED ON PORT: ', PORT);
});
