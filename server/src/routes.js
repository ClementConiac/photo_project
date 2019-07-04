const AuthenticationController = require ('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require ('./policies/AuthenticationControllerPolicy')
const ItemController = require ('./controllers/ItemController')
const UserController = require ('./controllers/UserController')
const AdressController = require ('./controllers/AdressController')
const OrderController = require ('./controllers/OrderController')

const stripe = require("stripe")("sk_test_jIyFCAXt6YmRlqHyDAHEOVos");

/* const StripeController = require ('./controllers/StripeController')
 */

const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './../client/src/assets/img/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}
const upload = multer({
    storage: storage, 
    limits: {
        fileSize: 1024*1024*5
    },
    fileFilter: fileFilter
})

module.exports = (app) =>{
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    )
    app.post('/login',
        AuthenticationController.login
    )


    app.post('/admin/items', upload.single('image'),
        ItemController.createItem
    )
    app.get('/admin/items',
        ItemController.displayItems
    )
    app.put('/admin/items/:itemId',
        ItemController.updateItem
    )
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

    app.post('/home',
        ItemController.displayItems
    )
    app.post('/payement', function (req, res, next) {
    const stripeToken = req.body.stripeToken;

    const charge = stripe.charges.create({
        amount: 1000,
        currency: "usd",
        description: "example charge",
        source: stripeToken,
    }, function(err, charge) {
        console.log('charge')
        console.log(charge)
        if (err) {
            res.send({
                success: false,
                message: 'Error'
            })
        } else {
            res.send({
                success: true,
                message: 'Success'
            })
        }
    }
    )
    })

    app.get('/account',
        AdressController.index,
        OrderController.order
    )
    app.post('/account',
        AdressController.createAdress
    )
    app.put('/account/:adressId',
        AdressController.updateAdress
    )
    app.delete('/account/:adressId',
        AdressController.removeAdress
    )


}