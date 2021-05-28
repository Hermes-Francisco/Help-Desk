const { DataTypes } = require("sequelize/types");

class Action extends Model {}

Action.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },  
  ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  description: {
    type: DataTypes.STRING(510),
    allowNull: false
  },
  user_id:{
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Action'
});

module.exports = Action;