const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    name: {
        type: 'String',
        unique: true
    },
    email: {
        type: 'String',
        unique: true
    },
    phone: {
        type: 'String',
        unique: true
    }
}, {
    collection: 'contacts',
    versionKey: false,
});

module.exports= mongoose.model('Contact', Contact);
