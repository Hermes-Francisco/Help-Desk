const { DataTypes, Model, UUIDV4 } = require('sequelize');
const { sequelize } = require('../sequelize');

class Ticket extends Model {}

Ticket.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },  
  description: {
    type: DataTypes.STRING(510),
    allowNull: false
  },
  user_id:{
    type: DataTypes.UUID,
    allowNull: false
  },
  prioridade:{
    type: DataTypes.VIRTUAL,
    allowNull: true
  },
  nivel: {
    type: DataTypes.INTEGER,
    defaultValue: false,
  },
  status:{

  }
}, {
  sequelize,
  modelName: 'Ticket'
});

module.exports = Ticket;