const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config/env')

module.exports = {
  authenticate
}

async function authenticate (req, res) {
  const { email, password } = req.body
  const user = await User.findOne({ email: email })

  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }

  try {
    if (!await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ error: 'Invalid password' })
    }
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }

  const authToken = jwt.sign({ user }, JWT_KEY)
  return res.status(200).json({ user, authToken })
}
