const AuthenticationController = require ('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')
const ItemController = require ('./controllers/ItemController')
const UserController = require ('./controllers/UserController')

module.exports = (app) =>{
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )
    app.post('/login',
        AuthenticationController.login
    )
    app.post('/admin/items',
        ItemController.createItem
    )
    app.get('/admin/items',
        ItemController.displayItems
    )
    /* app.get('/admin/items/:itemId',
        UserController.updateItem
    ) */
    app.delete('/admin/items/:itemId',
        ItemController.removeItem
    )

    app.post('/admin/users',
        UserController.createUser
    )
    app.get('/admin/users',
        UserController.displayUsers
    )
    app.put('/admin/users/:userId',
        UserController.updateUser
    )
    app.delete('/admin/users/:userId',
        UserController.removeUser
    )
}