import app from '../app'
import request from 'supertest'
import { CustomResponse } from '../model/custom-response'

describe('GET /status', () => {
  it('should return 200 status code with message', async () => {
    const { statusCode, body } = await request(app).get('/status')

    expect(statusCode).toBe(200)
    expect(body).toEqual(new CustomResponse(null, null, 'Server is running!'))
  })
})
