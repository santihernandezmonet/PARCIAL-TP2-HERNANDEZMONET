import ModelFile from "../model/DAOs/numerosFile.js"

class Servicio{
    constructor(){
        this.model = new ModelFile()
    }

    obtenerNumeros = async () => {
        const numeros = await this.model.obtenerNumeros() 

        return numeros
    }

    obtenerPromedioNumeros = async () => {
        const numeros = await this.obtenerNumeros()
        const suma = numeros.map(n => parseInt(n.numero)).reduce((acc, numero) => acc + numero, 0)
        return suma / numeros.length
    }

    obtenerMinMax = async () => {
        const numeros = await this.obtenerNumeros()
        const max = await this.#obtenerNumMax(numeros)
        const min = await this.#obtenerNumMin(numeros)
        
        const minMax = {
            min: min.numero,
            max: max.numero
        }

        console.log(minMax)

        return minMax
    }

    #obtenerNumMin = async (numeros) => {
        const numero = numeros.sort((a,b) => a.numero - b.numero)[0]
        return numero
    }

    #obtenerNumMax = async (numeros) => {
        const numero = numeros.sort((a,b) => b.numero - a.numero)[0]
        return numero
    }

    obtenerCantidadNumeros = async () => {
        const numeros = await this.obtenerNumeros()
        return numeros.length
    }


    guardarNumero = async nro => {
        const numeroGuardado = await this.model.guardarNumero(nro)
        return numeroGuardado
    }

}

export default Servicio