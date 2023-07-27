
import {Link} from 'react-router-dom';  


function UsuarioIndividual(usuario) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 gap-4 items-center">
        <div className="col-span-3">
          <ul className="divide-y divide-gray-200">
            <li className="py-4 text-black">{usuario.idusuario}</li>
            <li className="py-4 text-black">{usuario.nombre}</li>
            <li className="py-4 text-black">{usuario.email}</li>
            <li className="py-4 text-black">{usuario.telefono}</li>
          </ul>
        </div>
        <div className="col-span-1 flex justify-end space-x-2">
          <Link to={`/editarusuario/${usuario.idusuario}`}  >
            <li className="px-4 py-2 bg-blue-500 text-white rounded"> Editar</li>
          </Link>
          <button className="px-4 py-2 bg-red-500 text-white rounded">Borrar</button>
        </div>
      </div>
      <hr className="my-4 border-gray-200"/>
    </div>
  );
}

export default UsuarioIndividual;
