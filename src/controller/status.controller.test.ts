import { App } from '../app'
import request from 'supertest'

describe('GET /status', () => {
  it('should return 200 status code with message', async () => {
    const { statusCode, body } = await request(App).get('/status')

    expect(statusCode).toBe(200)
    expect(body).toEqual({ message: 'Server is running!' })
  })
})
