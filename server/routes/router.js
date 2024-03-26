import express from 'express';
import { getStudents, getTeachers } from '../controllers/controllers.js';

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hola mundo!');
});


//apis

router.get('/api/students',getStudents);
router.get('/api/teachers',getTeachers);


export default router;
