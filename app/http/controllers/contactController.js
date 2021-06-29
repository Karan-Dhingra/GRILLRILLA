const Contact = require('../../models/contact')
const moment = require('moment')


function contactController() {
    return {
        index(req, res) {
            const { email, message } = req.body
            console.log(email, message)
                // Validate request 
            if (!email) {
                req.flash('error', 'All fields are required')
                req.flash('email', email)
                return res.redirect('/')
            }

            const contact = new Contact({
                email,
                message
            })

            contact.save().then((contact) => {
                // Done
                console.log(contact);
                return res.redirect('/')
            }).catch(err => {
                req.flash('error', 'Something went wrong')
                return res.redirect('/')
            })
        },
        async comments(req, res) {
            const comment = await Contact.find(null,
                null, { sort: { 'createdAt': -1 } })
            res.header('Cache-Control', 'no-store')
                // res.render('customers/orders', { orders: orders, moment: moment })
            res.render('admin/comments', { comment: comment, moment: moment })
        }
    }
}

module.exports = contactController