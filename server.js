const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', (request, response) => {
    response.sendFile('/dist/index.html', {root: __dirname });  
  });

  app.listen(9000, () => console.log('server on port 9000'));