const express = require ("express")
const router = express.Router()
const apiController = require ("../controller/apiController")
const {validarID} = require ("../middlewares/validarID")
const checks = require("../middlewares/checks")
const {validarChecks} = require ("../middlewares/validarChecks")

router.get ("/list", apiController.apiList)
router.post ("/create",checks, validarChecks, apiController.apiCreateProduct)
router.put ("/edit/:id",validarID, checks, validarChecks,apiController.apiPut)
router.delete ("/delete/:id", validarID,apiController.apiDelete)

router.get ("/buscarid/:id", validarID, apiController.apiFindID)

module.exports = router