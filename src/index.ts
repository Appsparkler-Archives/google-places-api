import express from 'express'
import citiesMiddleware from './middlewares/cities'
import './config'

const app = express()
const port = process.env.PORT

app.use('/api/cities/:query', citiesMiddleware)

app.use('/', (req, res) => res.send('Hello!'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})