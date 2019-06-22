const {Item} = require('../models')

module.exports = {
    async createItem (req, res) {
        try{
            const item = await Item.create(req.body)
            res.send(item)
        } catch(err){
            res.status(500).send({
                error: 'This item could not be saved.'
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
