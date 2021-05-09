import express, {RequestHandler} from 'express'
import corsMiddleware from './middlewares/cors'
import morganMiddleware from './middlewares/morgan'
import path from 'path'
import serverless from 'serverless-http'
import router from './routes'
import './config'

const app = express()

app.use(router)
app.use(morganMiddleware)
app.use(corsMiddleware(process.env))
app.use('/.netlify/functions/index', router)
app.use('/', (req, res) => res.sendFile(path.join('./index.html')))

export const handler = serverless(app)

export default app;

