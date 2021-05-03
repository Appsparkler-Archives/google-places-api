import express from 'express'
import citiesMiddleware from './middlewares/cities'
import config from './config'

const app = express()
const port = config.PORT || 3000

app.use('/api/cities/:query', citiesMiddleware)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})