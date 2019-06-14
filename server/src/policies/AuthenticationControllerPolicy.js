const Joi = require ('@hapi/joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            firstname: Joi.string().alphanum().min(2).max(28).required(),
            lastname: Joi.string().alphanum().min(2).max(28).required(),
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/),
        }

        const {error, value} = Joi.validate(req.body, schema)

        if (error){
            switch (error.details[0].context.key) {
                case 'firstname':
                    res.status(400).send({
                        error:'Your firstname must only contain lower case, uper case <br>It must be at least 2 characters <br>It must be shorter than 28 characters.'
                    })
                    break
                case 'lastname':
                    res.status(400).send({
                        error:'Your lastname must only contain lower case, uper case <br>It must be at least 2 characters <br>It must be shorter than 28 characters.'
                    })
                    break
                case 'email':
                    res.status(400).send({
                        error:'You must provide a valid email adress.'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error:'Your password must only contain lower case, upper case, numerics <br>It must be at least 8 characters <br>It must be shorter than 28 characters.'
                    })
                    break
                default:
                res.status(400).send({
                    error: 'Invalid registration information'
                })
            }
        } else{
            next()
        }
    }
}
