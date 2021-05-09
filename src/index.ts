import express, {RequestHandler} from 'express'
import corsMiddleware from './middlewares/cors'
import morganMiddleware from './middlewares/morgan'
import path from 'path'
import bodyParser from 'body-parser'
import serverless from 'serverless-http'
// import router from '
import router from './routes'
import './config'

const app = express()
const port = process.env.PORT

app.use(router)
app.use(bodyParser.json());
app.use(morganMiddleware)
app.use(corsMiddleware(process.env))
app.use('/.netlify/functions/server', router)
app.use('/', (req, res) => res.sendFile(path.join('./index.html')))

export const handler = serverless(app)

export default app;

