const express = require('express')
const cookieParser = require('cookie-parser');
const authRoutes = require('../src/routes/auth.routes');
const jobRoutes = require('../src/routes/job.routes');

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoutes)
app.use('/api/jobs', jobRoutes)



module.exports = app