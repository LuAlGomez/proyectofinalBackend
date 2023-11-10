const { Superonlines } = require("../models/superonlines")


const apiController = {
    async apiList(req, res) {
        const list = await Superonlines.find()
        res.json(list)

    },

    async apiFindID(req, res) {
        const list = await Superonlines.findById(req.params.id)
        res.json(list)
    },

    async apiCreateProduct(req, res) {

        const newProduct = new Superonlines(req.body)
        await newProduct.save()
        res.status(201).json(newProduct)
    },


   async apiPut(req, res) {

       const result = await Superonlines.findByIdAndUpdate(req.params.id, req.body)
       res.status(201).json(result)
    },

   async apiDelete(req, res) {
        await Superonlines.findByIdAndDelete(req.params.id)
        res.status(200).json({
            msg: "Se ha borrado el objeto " + req.params.id + " correctamente"
        })
    },

}

module.exports = apiController