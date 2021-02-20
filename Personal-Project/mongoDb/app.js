const express = require('express');
const app = express();

app.listen(4000, () => console.log('Server running on port 4000!'))

app.get('/:name', (req, res) => {
  res.send('Your name is '+ req.params.name + '\n');
});

app.use(express.json());
app.post('/', (req, res) => {
  res.json(req.body);
});
