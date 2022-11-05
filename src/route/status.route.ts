// Express
import { Router } from 'express'
// Controllers
import { appStatusHandler } from '../controller/status.controller'

const router: Router = Router()

router.get('/status', appStatusHandler)

export { router }
