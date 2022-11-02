import { Request, Response } from 'express'
import { CustomResponse } from '../model/custom-response'

const routeNotFoundHandler = (_req: Request, res: Response): void => {
  res.status(404).json(new CustomResponse(null, null, 'Route requested not found!'))
}

export { routeNotFoundHandler }
