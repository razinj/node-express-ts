// Express
import { Request, Response } from 'express'

const appStatusHandler = (_req: Request, res: Response): void => {
  res.status(200).json({ message: 'Server is running!' })
}

export { appStatusHandler }
