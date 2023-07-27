
import { useParams } from "react-router-dom";

export default function EditarUsuario() {
 
    const params = useParams();

    return (
        <div><h2>Editar Usuario</h2>
        <h3>El id del usuario es: {params.idusuario}</h3>
        </div>
    )
    }



