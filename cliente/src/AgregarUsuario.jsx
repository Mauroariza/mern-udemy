import { useState } from "react";
import uniqid from 'uniqid'
import axios from 'axios'

export default function AgregarUsuario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  async function agregarUsuario() {
    const usuario = {
      nombre:nombre,
      email:email,
      telefono:telefono,
      idusuario:uniqid()
     }
     console.log(usuario);
     try {
      const res = await axios.post('/api/usuarios/agregarusuario', usuario);
      alert(res.data);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2">
      <h2 className="mb-5 text-2xl font-semibold text-gray-900">Crear Usuario</h2>
      <div className="p-6 mt-5 bg-white rounded shadow-md w-80">
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm text-gray-800">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-sm text-gray-800">
            Teléfono
          </label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <button
          onClick={agregarUsuario}
          className="w-full px-3 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
        >
          Guardar Usuario
        </button>
      </div>
    </div>
  );
}
