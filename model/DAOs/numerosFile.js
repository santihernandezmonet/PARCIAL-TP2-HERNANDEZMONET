import fs from 'fs'

class ModelFile {
    #nombreArchivo = null

    constructor() {
        this.#nombreArchivo = 'numeros.json'
    }

    #leerArchivo = async nombre => {
        let numeros = []
        try {
            numeros = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        } catch {}

        return numeros
    }

    #escribirArchivo = async (nombre, numeros) => {
        await fs.promises.writeFile(nombre, JSON.stringify(numeros, null, '\t'))
    }

    obtenerNumeros = async () => {
        return await this.#leerArchivo(this.#nombreArchivo)
    }

    guardarNumero = async numero => {
        const numeros = await this.#leerArchivo(this.#nombreArchivo)
        const id = String(parseInt(numeros[numeros.length-1]?.id || 0) + 1)
        const numeroConId = {id, ...numero}
        numeros.push(numeroConId)
        await this.#escribirArchivo(this.#nombreArchivo, numeros)

        return numeroConId
    }

}

export default ModelFile