const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/lucia-joias-client'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/lucia-joias-client/index.html');
});

app.listen(process.env.PORT || 4200);
