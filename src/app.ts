import Express from 'express'
import Logger from 'morgan'
import Compression from 'compression'

import Router from './router'

const App: Express.Application = Express()

App.use(Logger('dev'))
App.use(Express.json())
App.use(Compression())
App.use(Router)

export default App
