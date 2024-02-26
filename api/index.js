import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js'

dotenv.config();
const app = express();

app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected successfully ");
}).catch((err) => {
    console.log("Mongo err", err);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.json({ msg: "Hello World!" });
}); 

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.use(function (err, req, res, next) {
    const statusCode  = res.statusCode || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    });
    
})  
