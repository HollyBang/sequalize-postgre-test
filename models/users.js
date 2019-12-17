const Sequelize = require("sequelize");
const sequelize = require("../db");

const Model = Sequelize.Model;

class Users extends Model {}
Users.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    validate: {
      min: 3,
      max: 10
    }
  },
  age: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      min: 6,
      max: 30
    }
  }
}, {
  sequelize,
  modelName: 'users',
  timestamps: false
});

module.exports = Users;



