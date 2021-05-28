const { DataTypes, Model, UUIDV4 } = require('sequelize');
const { sequelize } = require('../sequelize');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },  
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username:{
    type: DataTypes.STRING,
    allowNull: true
  },
  password:{
    type: DataTypes.VIRTUAL,
    allowNull: true
  },
  perfil: {
    type: DataTypes.INTEGER,
    defaultValue: false,
  }
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;