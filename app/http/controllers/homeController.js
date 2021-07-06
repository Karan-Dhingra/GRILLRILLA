const Menu = require('../../models/menu')

function homeController() {
    return {
        async index(req, res) {
            const menuItem = await Menu.find()
            return res.render('home', { items: menuItem })
        }
    }
}

module.exports = homeController