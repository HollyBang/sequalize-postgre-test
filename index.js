const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = express.Router();

const Users = require("./models/users");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

router.get('/all', async (req, res) => {

  console.log("asdas");
  const users = await Users.findAll();
  res.json(users);
  console.log(users);
});

router.post('/add', async (req, res) => {
  console.log('ADD')
  const { name, age, email } = req.body;
  console.log(req.body)
  await Users.create({
    name,
    age,
    email
  });
  res.send('ADD SUCCESS or NOT(')
});

router.get('/delete/:id', async (req, res) => {
  const id = req.params.id;
  
  await Users.destroy({where: {id}});

  res.send('SUCCESS DELETE')
});

router.post('/update/:id', async (req, res) => {
  const id = req.params.id;
  const { name, age, email } = req.body;
  console.log(req.body);
  
  await Users.update({
    name, age, email
  },
  {where: {id}}
  );

  res.send('update DELETE')
});

app.use('/', router);

app.listen(3667,  () => {
  console.log('App listening on port 3667!');
});
