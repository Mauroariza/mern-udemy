import express from 'express';
import { agregarUsuario, obtenerUsuarios } from '../controllers/usuarioController.js';

export const router = express.Router(); 

// ruta agregar usuarios
router.post('/agregarusuario', agregarUsuario) // viene de usuarioController.js

// obtener todos los usuarios
router.get('/obtenerusuarios', obtenerUsuarios);//viene de usuarioController.js



//este archivo se dividió antes el modelo estaba aquí junto al archivo, pero lo cambié a la carpeta models