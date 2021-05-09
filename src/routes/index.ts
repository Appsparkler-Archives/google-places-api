import express, {Router, RequestHandler} from 'express'
import cities from './api-cities'
import hello from './hello'

const router = Router();

router.get('/', hello)
router.get('/api/cities/:input', cities);

export default router;