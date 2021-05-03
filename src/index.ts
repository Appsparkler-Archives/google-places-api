import express from 'express'
import citiesMiddleware from './middlewares/cities'
import dotenv from 'dotenv'

const app = express()
const port = 3000

app.use('/api/cities/:query', citiesMiddleware)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})