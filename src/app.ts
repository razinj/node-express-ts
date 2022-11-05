// Express
import Express, { Application } from 'express'
// Middlewares
import Logger from 'morgan'
import { router } from './router'

const App: Application = Express()

App.use(Logger('dev'))
App.use(Express.json())
App.use(router)

export { App }
