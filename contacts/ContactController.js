const express = require('express');
const route = express.Router();

const Contact = require('./ContactModel');


const fetchContacts = (request, response, next) => {
    const {search} = request.query;
    let searchConfig;
    if (search) {
        searchConfig = {
            $or: [
                {name: {$regex: new RegExp(`.*${search}.*`), $options: 'i'}},
                {email: {$regex: new RegExp(`.*${search}.*`), $options: 'i'}}
            ]
        }
    }
    Contact.find(searchConfig || {})
        .then(data => response.send(data))
        .catch(error => {
            console.log(error);
            response.status(500).send('Fetch contacts failure')
        });
};

const createContact = (request, response, next) => {
    const {body: contact} = request;
    Contact.create(contact)
        .then(data => response.send(data))
        .catch(error => response.status(500).send('Save contact failure'));
};

const removeContact = (request, response, next) => {
    const {_id} = request.params;
    Contact.findOneAndRemove(_id)
        .then(i => response.send(i))
        .catch(error => response.status(500).send('Remove contact failure'));
};

const updateContact = (request, response, next) => {
    const {body: contact} = request;
    Contact.findByIdAndUpdate(contact._id, {
        $set: contact
    })
        .then(data => response.send(data))
        .catch(error => response.status(500).send('Update contact failure'));
};

route.get('/', fetchContacts);
route.post('/', createContact);
route.put('/', updateContact);
route.delete('/:id', removeContact);

module.exports = route;
