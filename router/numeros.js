import express from 'express'
import Controller from '../controller/numeros.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controller = new Controller()
    }

    start() {
        this.router.get('/entrada', this.controller.obtenerNumeros)
        this.router.get('/promedio', this.controller.obtenerPromedioNumeros)
        this.router.get('/minmax', this.controller.obtenerMinMax)
        this.router.get('/cantidad', this.controller.obtenerCantidadNumeros)
        this.router.post('/entrada', this.controller.agregarNumero)

        return this.router
    }


}

export default Router