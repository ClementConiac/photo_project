module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item',{
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        price: DataTypes.DECIMAL,
    })
    return Item
}