import { App } from '../app'
import request from 'supertest'

describe('404', () => {
  it('should return 404 status code with message', async () => {
    const { statusCode, body } = await request(App).get('/non-existing-endpoint')

    expect(statusCode).toBe(404)
    expect(body).toEqual({ message: 'Route requested not found!' })
  })
})
