import AgregarUsuario from "./AgregarUsuario";
import EditarUsuario from "./EditarUsuario";
import ListaUsuarios from "./ListaUsuarios";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/NavBar";


function App() {
  return (
    <div>
      <BrowserRouter>     
      <Navbar/>
      <Routes>
        <Route path="/" element={<ListaUsuarios/>} exact /> {/*en el inicio se carga Lista usuarios */}
        <Route path="/agregarusuario" element={<AgregarUsuario/>}exact/>
        <Route path="/editarusuario/:idusuario" element={<EditarUsuario/>}exact/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}
export default App;