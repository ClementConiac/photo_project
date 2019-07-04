const {Order} = require('../models')

module.exports = {
    async order (req, res) {
        try{
            const {userId} = req.query
            const {adressId} = req.query
            const {itemId} = req.query
            const order = await Order.findAll({
                where: {
                    UserId: userId,
                    AdressId: adressId,
                    ItemId: itemId
                }
            })
            res.send(order)
        } catch(err){
            res.status(500).send({
                error: 'This order did not exist.'
            })
        }
    },
}

