const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

import User from "./models/users";

app.use('/', express.static(__dirname + '/public'));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

router.get('/all', async (req, res) => {

  res.send('asdas');
  console.log("asdas");
  const users = await User.findAll({});
  console.log(users);
});

router.get('/add', (req, res) => {

});

router.get('/delete', (req, res) => {

});

router.get('/update', (req, res) => {

});

app.use('/', router);

app.listen(3667,  () => {
  console.log('App listening on port 3667!');
});
