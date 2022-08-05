import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import multer from 'multer'
import path from "path"

// routes
import PoductRouter from './routes/product.routes.js'
import AuthRouter from './routes/auth.routes.js'
import UserRouter from './routes/user.routes.js'


const mongoUrl = "mongodb://localhost:27017/onlineStore"
const port = process.env.PORT || 5000;


const app = express()

// app settings
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('static'));


// app routes
app.use('/api/v1/products', PoductRouter)
app.use('/api/v1/auth', AuthRouter)
app.use('/api/v1/users', UserRouter)

//start app
app.listen(port, async () => {
    await mongoose
        .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, })
        .then(() => console.log(`Database connected successfully`))
        .catch((err) => console.log(err));
    console.log(`Server running on port ${port}`);
});