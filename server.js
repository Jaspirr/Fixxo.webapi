const port = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
const app = express()


//middleware
app.use(cors())

const usersController = require('./controllers/usersController')
app.use('/api/users', usersController)


app.listen(port, () => console.log(`WebApi is running on http://localhost:${port}`))