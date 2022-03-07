import { Router } from 'express'
import controller from '../controller/status.controller'

const routes: Router = Router()

routes.get('/status', controller.appStatusHandler)

export default { routes }
