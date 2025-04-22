import express from 'express';
import { initMongoDB } from './dao/mongodb/connection';    

await initMongoDB();

const app = express();

initMongoDB()
    .then(() => {
        console.log('MongoDB connectado exitosamente');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });

app.listen(8080, () => {
    console.log('Server corriendo en el puerto 8080');
});