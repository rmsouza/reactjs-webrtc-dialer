const User = require('../../models/User')

const ROUTE_BASE = '/auth'

describe('Auth', () => {
  beforeEach (async () => {
    const body = {
      name: 'Steve',
      email: 'steve@test.ca',
      password: '123'
    }
    await User.deleteMany({})
    await User.create(body)
  })

  describe(`POST ${ROUTE_BASE}`, () => {
    describe('when auth data provide is valid', () => {
      it('should return the user data and auth token', done => {
        const authData = {
          email: 'steve@test.ca',
          password: '123'
        }

        request(app)
          .post(`${ROUTE_BASE}`)
          .send(authData)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done)
      })
    })

    describe('when the password is invalid', () => {
      it('should reject', done => {
        const authData = {
          email: 'steve@test.ca',
          password: '12'
        }

        request(app)
          .post(`${ROUTE_BASE}`)
          .send(authData)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, done)
      })
    })
  })
})