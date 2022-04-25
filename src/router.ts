import { Router } from 'express'
import statusRoutes from './route/status.route'
import pageNotFoundRoutes from './route/route-not-found.route'

const router: Router = Router()

router.use(statusRoutes.routes, pageNotFoundRoutes.routes)

export default router
