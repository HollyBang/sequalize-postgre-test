const Sequelize = require('sequelize');


const sequelize = new Sequelize('seqdb', 'sequser', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

export default  sequelize;
