// config inicial
require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const app = express()



//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)
// entregar uma porta

//rota inicial / endpoint
app.get('/', (req, res) => {


    //mostrar req


    res.json({ message: 'Oi Exprees!' })
})

// clusterAPI 
 const DB_USER = process.env.DB_USER
 const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterapi.ck9km5j.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectamos ao MONGODB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))






