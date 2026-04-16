import express from 'express';
import dotenv from 'dotenv';
import mongodb from './config/mongoconnect.js';
import bookroutes from './routes/bookroutes.js';


dotenv.config();

const app=express();
const PORT=5000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

mongodb()
.then( ()=>{
        console.log("mongo db is connected!!");
    }
)
.catch((error)=>{
        console.log("mongo connection failed!",error);
    }
)

app.use('/api/book',bookroutes );
app.use('/home', (req,res)=>{
    res.send('Welcome to home page!');
})

app.listen(PORT, ()=>{
    console.log(`the server is running at ${PORT}`);
});