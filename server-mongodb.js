const mongoose = require('mongoose')


const initMongoDB = async () => {
    const conn = await mongoose.connect(process.env.MONOGDB_URI)
    console.log(`MongoDB is running at ${conn.connection.host}`)
}

module.exports = initMongoDB

