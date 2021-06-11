const { DataTypes, Model } = require("sequelize");
const { sequelize } = require('../sequelize');

class Action extends Model {
}

Action.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING(510),
    allowNull: false
  },
  user_id:{
    type: DataTypes.UUID,
    allowNull: false
  },
  ticket_id:{
    type: DataTypes.INTEGER,
    references:{
      model: "Tickets",
      key:'id',
      onDelete: 'CASCADE'
    }
  }
}, {
  sequelize,
  modelName: 'Action'
});

module.exports = Action;