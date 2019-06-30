module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item',{
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        image:{
            type: DataTypes.STRING,
        },
        price: DataTypes.DECIMAL,
    })
    return Item
}