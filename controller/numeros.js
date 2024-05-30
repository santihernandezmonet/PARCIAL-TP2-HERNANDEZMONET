import Service from "../service/numeros.js"

class Controller {

    constructor(){
        this.service = new Service()
    }

    obtenerNumeros = async (req, res) => {
        try {
            const numeros = await this.service.obtenerNumeros()
            res.json(numeros)
        } catch (error) {
            console.log(`Error al obtener numeros: ${error}`)
        }
    }

    obtenerPromedioNumeros = async (req,res) => {
        try {
            const promedio = await this.service.obtenerPromedioNumeros()
            res.json({promedio})
        } catch (error) {
            console.log(`Error al obtener promedio: ${error}`)

        }
    }

    obtenerMinMax = async (req, res) => {
        try {
            const minMax = await this.service.obtenerMinMax()
            res.json(minMax)
        } catch (error) {
            console.log(`Error al obtener min y max: ${error}`)
        }
    }

    obtenerCantidadNumeros = async (req,res) => {
        try {
            const cantNum = await this.service.obtenerCantidadNumeros()
            res.json(cantNum)
        } catch (error) {
            console.log(`Error al obtener la cantidad de numeros: ${error}`)

        }
    }

    agregarNumero = async (req,res) => {
        try {
            let numero = req.body
            let numeroGuardado = await this.service.guardarNumero(numero)

            res.json(numeroGuardado)
        } catch (error) {
            console.log(`Error guardando numero: ${error}`)

        }
    }
}

export default Controller