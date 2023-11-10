const {Schema, model} = require ("mongoose")

const schema = new Schema ({
    marca: {
        type: String,
        required:true
    },
    tipo: {
        type: String,
        required: true

    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    }

})

const Superonlines = model ("Superonline", schema)

module.exports= {Superonlines}