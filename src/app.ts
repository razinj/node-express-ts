import Express from 'express'
import Logger from 'morgan'
import { router } from './router'

const App: Express.Application = Express()

App.use(Logger('dev'))
App.use(Express.json())
App.use(router)

export default App
