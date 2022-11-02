import { Router } from 'express'
import { router as statusRouter } from './route/status.route'
import { router as pageNotFoundRouter } from './route/route-not-found.route'

const router: Router = Router()

router.use(statusRouter, pageNotFoundRouter)

export { router }
