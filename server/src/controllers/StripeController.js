/* const stripe = require("stripe")("sk_test_jIyFCAXt6YmRlqHyDAHEOVos");
 */
module.exports = {
/*     payement(req, res) {
        const token = 'req.body.stripeToken'
        const chargeAmount = req.body.chargeAmount
        (async () => {
            const charge = await stripe.charges.create({
              amount: 999,
              currency: 'eur',
              description: 'Charge for PhotoFlex',
              source: token,
            });
          })();
    } */




    /* async payement(req, res) {
        try {
            const customer = await stripe.customers.create({
                email: 'jenny.rosen@example.com',
                source: "tok_amex" // obtained with Stripe.js
            })
            const charge = await stripe.charges.create({
                amount: 999,
                currency: 'eur',
                description: 'Example charge',
                source: customer,
            })
            console.log('Customer: ',customer, 'Charge: ',charge)
            res.send(customer, charge)
        } catch (error) {
            res.status(500).send({
                error: 'An error has occured trying to pay the products.'
            })
        }  
    } */
}