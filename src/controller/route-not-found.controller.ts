import { Request, Response } from 'express'

import { CustomResponse } from '../model/custom-response'

const routeNotFoundHandler = (req: Request, res: Response): void => {
  try {
    res.status(200).json(new CustomResponse(null, null, 'Route requested not found!'))
  } catch (error) {
    res.status(400).json(new CustomResponse(null, error, "Couldn't get route requested not found message"))
  }
}

export default {
  routeNotFoundHandler,
}
