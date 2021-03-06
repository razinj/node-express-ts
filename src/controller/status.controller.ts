import { Request, Response } from 'express'
import { CustomResponse } from '../model/custom-response'

const appStatusHandler = (req: Request, res: Response): void => {
  res.status(200).json(new CustomResponse(null, null, 'Server is running!'))
}

export default { appStatusHandler }
