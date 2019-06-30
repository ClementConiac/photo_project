const {Item} = require('../models')

module.exports = {
    async createItem (req, res) {
        try{
            const item = await Item.create({
                title: req.body.title,
                description: req.body.description,
                image: req.file.filename,
                price: req.body.price
            })
            res.send(item)
        } catch(err){
            res.status(500).send({
                error: 'This item could not be saved.'
            })
        }
    },
    async show (req, res) {
        try{
            const item = await Item.findByPk(req.params.productId)
            res.send(item)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the product.'
            })
        }
    },
    async displayItems (req, res) {
        try{
            const items = await Item.findAll()
            res.send(items)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the items.'
            })
        }
    },
    async updateItem (req, res) {
        try{
            const itemId = req.params.itemId
            const updateItem = await Item.update(req.body,{
                where : {
                    id: itemId
                }
            })
            res.send(updateItem)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to update the item.'
            })
        }
    },
    async removeItem (req, res) {
        try{
            const itemId = req.params.itemId
            const deleteItem = await Item.destroy({
                where : {
                    id: itemId
                }
            })/* .then((deleteItem) => {
                console.log(`Did it worked ? ${deleteItem}`)
            }) */
            res.send(deleteItem)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to remove the items.'
            })
        }
    }
}
