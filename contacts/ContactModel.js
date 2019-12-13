const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
    name: {
        type: 'String',
        unique: true,
        match: /^[a-zA-Z]{2,} [a-zA-Z]{2,}$/
    },
    email: {
        type: 'String',
        unique: true,
        match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    },
    phone: {
        type: 'String',
        unique: true,
        match: /^\+[0-9]{1,2} [0-9]{10}$/
    }
}, {
    collection: 'contacts',
    versionKey: false,
});

module.exports= mongoose.model('Contact', Contact);
