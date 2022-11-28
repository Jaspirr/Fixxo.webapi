const express = require('express')
const controller = express.Router()
let users = require('../data/simulated_database')

// POST - CREATE - Skapar en användare - http://localhost:5000/api/users
controller.post('/', (req, res) => {
    let user = {
        id: (users[user.length -1])?.id > 0 ? (users[user.length -1])?.id + 1 : 1,
        firstName: req.body.firstName, 
        lastName:  req.body.lastName,
        email:  req.body.email,
        password:  req.body.password
    }

    users.push(user)
    req.status(201).json(user)
})

// GET - READ - HÄMTA ALLA ANvändaren - http://localhost:5000/api/users
controller.get('/', (req, res) => {
    res.status(200).json(users?.length == 0 ? []: users)
})

module.exports = controller