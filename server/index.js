const express = require('express')
const bodyParser = require('body-parser')
// const cors = require('cors')

const app = express()

// app.use(cors)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auth'))

app.listen(3000)

module.exports = app
