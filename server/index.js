import express from  'express';
import morgan from 'morgan';
import router from './routes/router.js';
import { connectDB } from './database/db.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('combined'));
app.use(router);


const PORT = 3000;


app.listen(PORT, async()=>{
    console.log('servidor corriendo en http://localhost:3000');
    await connectDB();
})