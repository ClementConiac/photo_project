const AuthenticationController = require ('./controllers/AuthenticationController')
const ItemController = require ('./controllers/ItemController')
const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')

module.exports = (app) =>{
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )
    app.post('/login',
        AuthenticationController.login
    )
    app.post('/admin/items',
        ItemController.create
    )
    app.get('/admin/items',
        ItemController.displayItems
    )
    app.delete('/admin/items/:itemId',
        ItemController.remove
    )
}