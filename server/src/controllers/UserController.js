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
    async updateUser (req, res) {
        try{
            const userId = req.params.userId
            const updateUser = await User.update(req.body,{
                where : {
                    id: userId
                }
            })
            res.send(updateUser)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to update the user.'
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
            })
            res.send(deleteUser)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to remove the users.'
            })
        }
    }
}
