'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User);
        }
    };
    Order.init({
        UserId: DataTypes.INTEGER,
        status: DataTypes.ENUM,
        returnDate: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};