import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    
    {
        host: process.env.DB_HOST,
        dialect:process.env.DB_DIALECT,
        port:3306,
        define:{
            timestamps:false,
        }
    }
);

export const connectDB = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('base de datos conectada con exito!');
    } catch (error) {
        console.log('error al conectar la base de datos, error:',error);
    };

};
