module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order')

    Order.associate = function (models) {
        Order.belongsTo(models.User)
        Order.belongsTo(models.Item)
        Order.belongsTo(models.Adress)
    }

    return Order
}