const {Superonlines} = require ("../models/superonlines")

const validarID = async (req, res, next) => {
    try {
        const busqueda = await Superonlines.findById(req.params.id)
       if (busqueda !== null) {
        next()
       } else {
        res.status(400).json({
            msg: "el id que ingresaste " + req.params.id + " no es valido"
        })
       }
    } catch (error) {
        res.status(400).json({
            msg: "el id que ingresaste " + req.params.id + " no es valido"
        })
        
    }
}

module.exports = {validarID}