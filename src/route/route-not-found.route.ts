import { Router } from 'express'
import { routeNotFoundHandler } from '../controller/route-not-found.controller'

const router: Router = Router()

router.all('*', routeNotFoundHandler)

export { router }
