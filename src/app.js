const express = require('express')
const cookieParser = require('cookie-parser');
const authRoutes = require('../src/routes/auth.routes');

const app = express()

app.use(express.json())
app.use()
app.use('/api/auth', authRoutes)



module.exports = app