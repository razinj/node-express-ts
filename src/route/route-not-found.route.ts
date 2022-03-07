import { Router } from 'express'
import routeNotFoundController from '../controller/route-not-found.controller'

const routes: Router = Router()

routes.all('*', routeNotFoundController.routeNotFoundHandler)

export default { routes }
