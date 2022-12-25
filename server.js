require('dotenv').config()
const port = process.env.WEBAPI_PORT || 9999
const initMongoDB = require('./server-mongodb')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()



//middleware - körs mellan vår app (system -> middleware -> app)
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json())

const usersController = require('./controllers/usersController')
app.use('/api/users', usersController)

const productsController = require('./controllers/productsController')
app.use('/api/products', productsController)


//  routes
initMongoDB()


app.listen(port,() => console.log(`WebApi is running at http://localhost:${port}`))

