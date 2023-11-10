const mongoose = require ("mongoose")
mongoose.set ("strictQuery", false)
require ("dotenv").config()

const connect = async () => {
    try {
        await mongoose.connect (process.env.MONGO_CONNECT)
        console.log ("Base de datos activa")

    } catch {
        console.log ("Error en la base de datos")
    }
 }

    module.exports = {connect}