import app from '../app'
import request from 'supertest'
import { CustomResponse } from '../model/custom-response'

describe('404', () => {
  it('should return 404 status code with message', async () => {
    const { statusCode, body } = await request(app).get('/non-existing-endpoint')

    expect(statusCode).toBe(404)
    expect(body).toEqual(new CustomResponse(null, null, 'Route requested not found!'))
  })
})
