const {Adress} = require('../models')

module.exports = {
    async index (req, res) {
        try{
            const {userId} = req.query
            const adresses = await Adress.findAll({
                where: {
                    UserId: userId
                }
            })
            res.send(adresses)
        } catch(err){
            res.status(500).send({
                error: 'This adress could not be saved.'
            })
        }
    },

}
