import express from 'express'
import citiesMiddleware from './middlewares/cities'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/cities/:query', citiesMiddleware)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})