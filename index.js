const express = require('express');


const app = express();



app.get('/', (req, res) => {
  res.send({ message: 'healthy' })
});

app.listen(30, () => console.log('Gator app listening on port 3000!'));