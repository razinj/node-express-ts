import Express from 'express'
import Logger from 'morgan'

import Router from './router'

const App: Express.Application = Express()

App.use(Logger('dev'))
App.use(Express.json())
App.use(Router)

export default App
