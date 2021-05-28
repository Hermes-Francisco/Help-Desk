const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../sequelize');

class Profile extends Model {}

Profile.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },  
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Profile'
});

module.exports = Profile;