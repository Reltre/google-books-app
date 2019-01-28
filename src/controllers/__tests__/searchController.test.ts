import app from '../../app'
const request = require('supertest')

describe('GET /', () => {
  test('initial page load responds with status code of 200', async () => {
    const response = await request(app).get("/")
    expect(response.statusCode).toEqual(200)
  })

  test('on successful search response includes correct title', async () => {
    const response = await request(app).get("/?search=Dracula")
    expect(response.text).toMatch(/.*Dracula.*/)
  })

  test('on unsuccessful search, no results are within response', async () => {
    const response = await request(app).get("/?search=ZZXGHJK54345")
    expect(response.text).toMatch("[]")
  })
})