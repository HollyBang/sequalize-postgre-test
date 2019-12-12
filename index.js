const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use('/', express.static(__dirname + '/public'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3666, function () {
  console.log('App listening on port 3000!');
});
