import { Router } from 'express'

import statusRoutes from './route/status.route'
import pageNotFoundRoutes from './route/route-not-found.route'

const routes: Router = Router()

routes.use(statusRoutes.routes, pageNotFoundRoutes.routes)

export default routes
