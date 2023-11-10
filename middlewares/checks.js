const {check} = require ("express-validator")

const checks = [
    check("marca")
        .notEmpty().withMessage("El campo marca debe ser obligatorio")
        .isString().withMessage("El campo marca tiene que ser de tipo string"),
    check("tipo")
        .notEmpty().withMessage("El campo tipo debe ser obligatorio")
        .isString().withMessage("El campo tipo tiene que ser de tipo string"),
    check("precio")
        .notEmpty().withMessage("El campo precio debe ser obligatorio")
        .isNumeric().withMessage("El campo precio tiene que ser de tipo numero"),
]

module.exports= checks