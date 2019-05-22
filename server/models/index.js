const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/dialer', { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose
