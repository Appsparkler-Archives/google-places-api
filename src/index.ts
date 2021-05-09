import express, {RequestHandler} from 'express'
import corsMiddleware from './middlewares/cors'
import morganMiddleware from './middlewares/morgan'
import path from 'path'
import serverless from 'serverless-http'
import router from './routes'
import './config'
// 
const distPath = path.resolve('../src/index.html')
const app = express()
// 
app.use(corsMiddleware(process.env))
app.use(morganMiddleware)
//
app.use(router)
app.use('/.netlify/functions/index', router)
// app.use('/', (req, res) => res.sendFile(distPath))
app.use('/', (req, res) => res.redirect('/.netlify/functions/index'))

export const handler = serverless(app)

export default app;

