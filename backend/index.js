import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import rutaslibros from './rutas/rutaslibros.js';
import cors from 'cors';



const app = express();

app.use(express.json());

 app.use(cors({
     origin: 'http://localhost:5173',
     methods: ['GET, POST, PUT, DELETE'],
     allowedHeaders: ['Content-Type'], 
        credentials: true,
    }));

app.get('/', (req, res) => {
    res.send('HOla mundo desde el servidor de express')})
    app.use('/libros', rutaslibros);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Conectado a la base de datos');
        //aquí le indica en el puerto que debe escuchar, el puerto se importa desde el archivo config.js
    app.listen(PORT, () => {
    console.log(`"Servidor corriendo en el puerto: " ${PORT}`);
});
    })
    .catch((error) => {
        console.log('Error al conectar a la base de datos', error);
    });
