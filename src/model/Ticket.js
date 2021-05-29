const { DataTypes, Model, UUIDV4 } = require('sequelize');
const { sequelize } = require('../sequelize');
const Action = require('./Action');

class Ticket extends Model {
    static associations(model){
        Ticket.hasMany(model.Actions);
    }
}

Ticket.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },  
  title:{
      type: DataTypes.STRING,
      allowNull: false
  },
  description: {
    type: DataTypes.STRING(510),
    allowNull: false
  },
  user_id:{
    type: DataTypes.UUID,
    allowNull: false
  },
  priority:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  gravity:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  urgency: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tendency: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  status:{
      type: DataTypes.ENUM('um', 'dois'),
      defaultValue: "um"
  }
}, {
  sequelize,
  modelName: 'Ticket'
});

module.exports = Ticket;