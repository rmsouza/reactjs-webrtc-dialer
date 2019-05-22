const User = require('../../models/User')
const mongoose = require('mongoose')

const ROUTE_BASE = '/users'

describe('Users', () => {
  describe(`GET ${ROUTE_BASE}/:id`, () => {
    let user

    beforeEach(async () => {
      await User.deleteMany({})
      const body = {
        name: 'Steve',
        email: 'steve@test.ca',
        password: '123'
      }
      user = await User.create(body)
    })

    describe('when the provided id exist', () => {
      it('should return user data', done => {
        request(app)
          .get(`${ROUTE_BASE}/${user._id}`)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            expect(err).to.be.null

            expect(res.body.user).to.be.an('object')
            expect(`${res.body.user._id}`).to.be.equal(`${user._id}`)
            expect(user.name).to.be.equal(user.name)
            done()
          })
      })
    })

    describe('when a invalid id is provided', () => {
      it('should reject', done => {
        request(app)
          .get(`${ROUTE_BASE}/123`)
          .set('Accept', 'application/json')
          .expect(400, done)
      })
    })

    describe('when a non existent id is provided', () => {
      it('should return NOT FOUND', done => {
        const id = mongoose.Types.ObjectId()
        request(app)
          .get(`${ROUTE_BASE}/${id}`)
          .set('Accept', 'application/json')
          .expect(404, done)
      })
    })
  })

  describe(`POST ${ROUTE_BASE}`, () => {
    beforeEach(async () => {
      await User.deleteMany({})
    })

    describe('when valid user data are provided', () => {
      it('should create a new user', done => {
        const body = {
          name: 'Steve',
          email: 'steve@test.ca',
          password: '123'
        }

        request(app)
          .post(`${ROUTE_BASE}`)
          .send(body)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(201)
          .end((err, res) => {
            expect(err).to.be.null

            expect(res.body.user.name).to.be.equal(body.name)
            expect(res.body.user.email).to.be.equal(body.email)
            expect(res.body.user.password).to.not.be.equal(body.password)
            done()
          })
      })
    })

    describe('when a invalid user data are provided', () => {
      it('should reject', done => {
        const body = {
          name: '',
          email: 'steve.test.ca'
        }

        request(app)
          .post(`${ROUTE_BASE}`)
          .send(body)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(400, done)
      })
    })

  })
})