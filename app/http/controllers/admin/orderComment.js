const Order = require('../../../models/order')
const moment = require('moment')

function orderComment() {
    return {
        store(req, res) {
            // Validate request
            // console.log("body:" + req.user._id);
            const { phone, address } = req.body
            if (!phone || !address) {
                req.flash('message', 'All fields are required')
            }

            const order = new Order({
                customerId: req.user._id,
                items: req.session.cart.items,
                phone,
                address
            })
            order.save().then(result => {
                Order.populate(result, { path: 'customerID' }, (err, placedOrder) => {
                    req.flash('success', 'Order placed successfully')
                    console.log(result);
                    delete req.session.cart
                        //Emit

                    const eventEmitter = req.app.get('eventEmitter')
                    eventEmitter.emit('orderPlaced', placedOrder)

                    return res.redirect('/admin/customer/orders')
                })
            }).catch((err) => {
                req.flash('Something went wrong')
                console.log("error " + err);
                return res.redirect('/cart')
            })
        },
        // async show(req, res) {
        //     console.log(req._id);
        //     console.log(Order);
        //     const order = await Order.findById(req.params.id)
        //         // Authorize user
        //     console.log(order)
        //     return res.render('customers/singleOrder', { order })
        // },
        async index(req, res) {
            const orders = await Order.find(null,
                null, { sort: { 'createdAt': -1 } })
            res.header('Cache-Control', 'no-store')
            res.render('customers/orders', { orders: orders, moment: moment })
        }
    }
}

module.exports = orderComment