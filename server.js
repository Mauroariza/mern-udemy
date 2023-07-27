
import express from 'express';
import cors from 'cors';
import {router as rutausuario} from './routes/usuarioRoutes.js'; 
const app = express();
app.use(cors());
//importar conexion a la base de datos  
import archivoDB from './conexion.js';
  
//importar rutas y archivos

//import {ModeloUsuario as model } from './routes/usuarioRoutes.js';

// Para parsear JSON en el cuerpo de las solicitudes
app.use(express.json());

// Para parsear cuerpos con formato urlencoded 
app.use(express.urlencoded({ extended: true }));

app.use('/api/usuarios/', rutausuario); // se utiliza la instancia de router



app.get('/', (req, res) => {    
    res.send('Hello World');    
});

app.listen(5000, () => {    
    console.log('server started');
});