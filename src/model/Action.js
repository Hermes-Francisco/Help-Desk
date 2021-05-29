const { DataTypes, Model } = require("sequelize");
const { sequelize } = require('../sequelize');
const Ticket = require("./Ticket");

class Action extends Model {
    static associations(model){
        Action.belongsTo(model.Tickets);
    }
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
  }
}, {
  sequelize,
  modelName: 'Action'
});
Action.belongsTo(Ticket);
module.exports = Action;