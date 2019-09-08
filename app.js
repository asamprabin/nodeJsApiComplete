// Packages Imported
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
// /Packages Imported

// Files Imported
const env = require('./environment');
const faqRoutes = require('./routes/faqRoutes');
const googleAuthRoutes = require('./routes/googleAuthRoutes');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const generalRoutes = require('./routes/generalRoutes');
const proposalRoutes = require('./routes/proposalRoutes');
// /Files Imported

// Mongoose Config
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.connect(env.database)
mongoose.connection.on('error', err => console.log(`Connection error: ${err}`))
mongoose.connection.once('open', () => console.log('connected to mongodb'))
// /Mongoose Config

const app = express()
app.use(cors())
// support parsing of application/json type post data
app.use(bodyParser.json());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/',(req, res) => res.send('Iraniyam'));
app.use('/faq', faqRoutes);
app.use('/googleauth', googleAuthRoutes);
app.use('/user', userRoutes);
app.use ('/upload', uploadRoutes);
app.use('/general', generalRoutes);
app.use('/proposal', proposalRoutes);
// /Routes

app.listen(env.port, () => {
    console.log(`Api listening on Port ${env.port}`);
    console.log(`UTC time : ${env.currentUTC}`)
})