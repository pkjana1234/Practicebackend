
import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './route/authRoute.js';
import bodyParser from 'body-parser'
import cors from 'cors'
//configure env
dotenv.config()
//databse config
connectDB();

const app=express();
//middelwares
//app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan("dev"));
//define Route
app.use('/api/auth',authRoute)

app.get('/', function (req, res) {  
    res.send('Welcome to JavaTpoint!');  
  });  




const port=process.env.PORT || 45678

app.listen(port,()=>{
    console.log(`server running on port: http://localhost:${port}`.bgRed.white);
})

