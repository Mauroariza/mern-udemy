import ModeloUsuario from '../models/usuario.js';

const agregarUsuario = (req, res) => {
    const nuevousuario = new ModeloUsuario({
        nombre:req.body.nombre,
        email: req.body.email,
        telefono:req.body.telefono,
        idusuario:req.body.idusuario
    });

    nuevousuario.save()
        .then(() => res.send('usuario agregado correctamente'))
        .catch((err) => res.status(500).send(err));
}

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await ModeloUsuario.find({});
        res.send(usuarios);
    } catch (err) {
        res.send(err);
    }
};

export { agregarUsuario, obtenerUsuarios };
