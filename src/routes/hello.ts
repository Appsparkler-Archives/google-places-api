import {RequestHandler} from 'express'

const helloRoute:RequestHandler = (req, res) => res.send('Hello! Welcome To Cities API.')

export default helloRoute