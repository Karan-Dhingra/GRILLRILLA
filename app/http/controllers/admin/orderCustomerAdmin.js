const Order = require('../../../models/order')
const moment = require('moment')

function orderCustomerAdmin() {
    return {
        show(req, res) {
            return res.render('/admin/customer/orders')
        },
        async index(req, res) {
            const orders = await Order.find(null,
                null, { sort: { 'createdAt': -1 } })
            res.header('Cache-Control', 'no-store')
            res.render('customers/orders', { orders: orders, moment: moment })
        }
    }
}

module.exports = orderCustomerAdmin