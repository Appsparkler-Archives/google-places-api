import express from 'express'
import cors from 'cors'
import citiesMiddleware from './middlewares/cities'
import './config'

const app = express()
const port = process.env.PORT
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',')

const corsMiddleware = cors({
   origin: (origin, next) => {
    
    if(!origin) {
      const noOriginError = new Error("origin is required");
      return next(noOriginError, true);
    }

    const isAllowedOrigin = allowedOrigins.includes(origin);
    if(!isAllowedOrigin){ 
      const unAllowedOriginError = new Error("Origin not allowed to access");
      return next(unAllowedOriginError, false)
    }
    
    return next(null, allowedOrigins.includes(origin))
  }
})

app.use(corsMiddleware)

app.use('/api/cities/:query', citiesMiddleware)

app.use('/', (req, res) => res.send('Hello! Welcome To Cities API'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})