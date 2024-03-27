import { sequelize } from "../database/db.js"

export const getStudents = async (req,res)=>{
    try {
        const students = await sequelize.query('SELECT * FROM alumnos')
        if(!students){
            return res.status(404).json({message: 'aun no se cargaron alumnos!'});
        };
        return res.json({data:students});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'error interno del servidor!'});
    };
};


export const getTeachers = async (req,res)=>{
    try {
        const teachers = await sequelize.query('SELECT * FROM profesores');
        if(!teachers){
            return res.status(404).json({message: 'aun no se cargaron profesores!'});
        }
        return res.status(200).json({data: teachers});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:'error interno del servidor!'});
    }
}