import mongoose from 'mongoose';

const eschema = mongoose.Schema;

const eschemausuario = new eschema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    email: { type: String, required: [true, 'Email obligatorio'] },
    telefono: String,
    idusuario: String,
});

const ModeloUsuario = mongoose.model('usuario', eschemausuario); 

export default ModeloUsuario;
