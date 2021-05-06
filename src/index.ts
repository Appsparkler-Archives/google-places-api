import express, {RequestHandler} from 'express'
import corsMiddleware from './middlewares/cors'
import morgan from 'morgan'
import citiesMiddleware from './middlewares/cities'
import './config'

const app = express()
const port = process.env.PORT

const helloMiddleware:RequestHandler = (req, res) => res.send('Hello! Welcome To Cities API')
const morganMiddleware = morgan('tiny')
app.use(morganMiddleware)
app.use(corsMiddleware(process.env))
app.use('/api/cities/:query', citiesMiddleware)
app.use('/', helloMiddleware)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})