import express from 'express'
import RouterNumeros from './router/numeros.js'


const app = express()
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', new RouterNumeros().start())


const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`))
server.on('Error', error => console.log(`Error en servidor: ${error}`))