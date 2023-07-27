import {useState,useEffect} from 'react';
import axios from 'axios'
import UsuarioIndividual from './UsuarioIndividual';


function ListaUsuarios(){

const[datausuarios,setDatausuarios] = useState([])

    useEffect(() => {  // cuando cargo la página
        axios.get('/api/usuarios/obtenerusuarios')
            .then(res => { 
                console.log(res.data);
                setDatausuarios(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

//mapear listadeusuario en objeto usuario
const listaUsuarios = datausuarios.map((usuario) => (
  <div key={usuario.id}>
    <UsuarioIndividual {...usuario} />
  </div>
));

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            {listaUsuarios}
            
        </div>
    )
}
export default ListaUsuarios;





