import express, { json, urlencoded } from 'express'
import productsRouter from './routes/products.js'
import cartsRouter from './routes/carts.js'


const app = express()
const PORT = 8080

app.use(json())
app.use(urlencoded({extended:true}))

// http://localhost:8080/api/products
app.use('/api/products',productsRouter)

// http://localhost:8080/api/products
app.use('/api/carts',cartsRouter)

app.listen(PORT,err =>{
    if (err)  console.log(err)
    console.log(`Escuchando en el puerto ${PORT}`)
})