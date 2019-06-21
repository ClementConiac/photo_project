module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item',{
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL,
    })
    return Item
}