module.exports = {
  DB_URL: process.env.DB_URL || 'localhost',
  DB_USER: process.env.DB_USER || '',
  DB_PASS: process.env.DB_PASS || '',
  DB_NAME: process.env.DB_NAME || 'test',
  JWT_KEY: process.env.JWT_KEY || '123'
}
