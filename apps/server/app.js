const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const axios = require('axios');


const userRoutes = require('./routes/userRoutes');
const notifyRoutes = require('./routes/notifyRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const accountAggregatorRoutes = require('./routes/aaRoutes');
const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API 
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '15kb'
}));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

app.get('/status', (req, res) => {
    res.send('Hello from the API!');
});

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/notifications', notifyRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1/aa', accountAggregatorRoutes);


app.get('/api/v1/test',async (req,res)=>{
    try {
        const response = await axios.post('http://localhost:8500/api/v1/aa/initiate-link',{
            mobile:'8779112732'
        },{
            headers: {
               Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NTQzMTNkZDVlOGE2OWYxMmY0ZjU0YSIsImlhdCI6MTc1NjE0NjcxMywiZXhwIjoxNzU4NzM4NzEzfQ.fSgS4aCJ7Q1gFqOSBxfyW67VaUdSABB1sOKRg2a5ukE`
            }
        });
        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

// handle undefined Routes
app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;