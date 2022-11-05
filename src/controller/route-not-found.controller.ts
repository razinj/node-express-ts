// Express
import { Request, Response } from 'express'

const routeNotFoundHandler = (_req: Request, res: Response): void => {
  res.status(404).json({ message: 'Route requested not found!' })
}

export { routeNotFoundHandler }
