import { Request, Response } from 'express'

import { CustomResponse } from '../model/custom-response'

const appStatusHandler = (req: Request, res: Response): void => {
  try {
    res.status(200).json(new CustomResponse(null, null, 'Server is running!'))
  } catch (error) {
    res.status(400).json(new CustomResponse(null, error, "Couldn't get server status"))
  }
}

export default {
  appStatusHandler,
}
