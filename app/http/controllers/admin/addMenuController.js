const Menu = require('../../../models/menu')

function addMenuController() {
    return {
        insert(req, res) {
            const menuItem = new Menu({
                name: req.body.name,
                image: req.body.image,
                price: req.body.price,
                size: req.body.size
            })
            menuItem.save().then((item) => {
                // Done
                console.log("DONE");
                return res.redirect('/admin/menu')
            }).catch(err => {
                console.log(err);
                req.flash('error', 'Something went wrong')
                return res.redirect('/')
            })
        },
        async show(req, res) {
            const items = await Menu.find(null,
                null, { sort: { 'createdAt': -1 } })
            res.header('Cache-Control', 'no-store')
            res.render('admin/addMenu', { item: items })

        }
    }
}

module.exports = addMenuController