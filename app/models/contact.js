const mongoose = require('mongoose');
const Schema = mongoose.Schema

const contactSchema = new Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        // required: true
    },
    email: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: true });


module.exports = mongoose.model('Contact', contactSchema)