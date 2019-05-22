const User = require('../models/User')

module.exports = {
  get,
  create,
  update,
  remove
}

async function get (req, res) {
  const id = req.params.id

  try {
    const user = await User.findById(id)
    if (!user) {
      return res.status(404).end()
    }

    return res.status(200).json({ user })
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

async function create (req, res) {
  try {
    const user = await User.create(req.body)

    return res.status(201).json({ user })
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

async function update (req, res) {
  const body = req.body

  try {
    const user = await User.findOneAndUpdate({ _id: body._id }, { '$set': req.body })
    return res.status(202).json({ user })
  } catch (err) {
    return res.status(400).json({ error: err.message })
  }
}

async function remove (req, res) {
  const id = req.params.id

  try {
    await User.deleteOne({ _id: id })
    return res.status(200).json({ message: 'User removed successfully' })
  } catch (err) {
    return res.status(400).json({ message: err.message })
  }
}
