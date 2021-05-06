import express, {RequestHandler} from 'express'
import corsMiddleware from './middlewares/cors'
import citiesMiddleware from './middlewares/cities'
import morganMiddleware from './middlewares/morgan'
import './config'

const app = express()
const port = process.env.PORT

const helloMiddleware:RequestHandler = (req, res) => res.send('Hello! Welcome To Cities API')
app.use(morganMiddleware)
app.use(corsMiddleware(process.env))
app.use('/api/cities/:query', citiesMiddleware)
app.use('/', helloMiddleware)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})