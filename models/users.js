import Sequelize from "sequelize";
import sequelize from "../db";

const Model = Sequelize.Model;

class User extends Model {}
User.init({
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
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
  modelName: 'user',
  timestamps: false
});

export default User;


