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

    async createAdress (req, res) {
        try{
            const adress = await Adress.create(req.body)
            res.send(adress)
        } catch(err){
            res.status(500).send({
                error: 'This adress could not be saved.'
            })
        }
    },
    async updateAdress (req, res) {
        try{
            const adressId = req.params.adressId
            const updateAdress = await Adress.update(req.body,{
                where : {
                    id: adressId
                }
            })
            res.send(updateAdress)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to update the adress.'
            })
        }
    },
    async removeAdress (req, res) {
        try{
            const adressId = req.params.adressId
            const deleteAdress = await Adress.destroy({
                where : {
                    id: adressId
                }
            })
            res.send(deleteAdress)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to remove the adress.'
            })
        }
    }

}
