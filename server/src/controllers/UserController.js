const {User} = require('../models')

module.exports = {
    async createUser (req, res) {
        try{
            const user = await User.create(req.body)
            res.send(user)
        } catch(err){
            res.status(500).send({
                error: 'This user could not be saved.'
            })
        }
    },
    async displayUsers (req, res) {
        try{
            const users = await User.findAll()
            res.send(users)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the users.'
            })
        }
    },
    async removeUser (req, res) {
        try{
            const userId = req.params.userId
            const deleteUser = await User.destroy({
                where : {
                    id: userId
                }
            })/* .then((deleteItem) => {
                console.log(`Did it worked ? ${deleteItem}`)
            }) */
            res.send(deleteUser)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to remove the users.'
            })
        }
    }
}
