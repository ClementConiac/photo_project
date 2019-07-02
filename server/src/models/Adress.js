module.exports = (sequelize, DataTypes) => {
    const Adress = sequelize.define('Adress', {
        title: DataTypes.STRING,
        postal: DataTypes.STRING,
        country: DataTypes.STRING,
    })

    Adress.associate = function (models) {
        Adress.belongsTo(models.User)

    }

    return Adress
}