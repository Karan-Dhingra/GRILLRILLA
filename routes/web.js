const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')
const orderController = require('../app/http/controllers/customers/orderController')
const adminOrderController = require('../app/http/controllers/admin/orderController')
const statusController = require('../app/http/controllers/admin/statusController')
const contactController = require('../app/http/controllers/contactController')
const orderCustomerAdmin = require('../app/http/controllers/admin/orderCustomerAdmin')
const addMenuController = require('../app/http/controllers/admin/addMenuController')

// MiddleWare
const guests = require('../app/http/middleware/guest')
const auth = require('../app/http/middleware/auth')
const admin = require('../app/http/middleware/admin')


function initRoutes(app) {
    app.get('/', homeController().index)

    app.get('/login', guests, authController().login)
    app.post('/login', authController().postLogin)

    app.get('/register', guests, authController().register)
    app.post('/register', authController().postRegister)

    app.post('/logout', authController().logout)

    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)

    app.post('/orders', auth, orderController().store)
    app.get('/customer/orders', auth, orderController().index)
    app.get('/customer/orders/:id', auth, orderController().show)

    app.get('/admin/customer/orders', admin, auth, orderCustomerAdmin().index)
    app.get('/admin/customer/orders/:id', auth, admin, orderCustomerAdmin().show)
    app.get('/admin/orders', admin, adminOrderController().index)

    app.post('/admin/order/status', admin, statusController().update)

    app.post('/contact', auth, contactController().index)
    app.get('/admin/comments', admin, auth, contactController().comments)

    // Add Menu
    app.get('/admin/menu', admin, addMenuController().show)
    app.post('/admin/menu/add-menu', admin, addMenuController().insert)

}

module.exports = initRoutes