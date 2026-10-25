import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Seguridad from "./TiendaCafe/Seguridad/seguridad";
import Productos from "./TiendaCafe/Productos/productos";
import Disponible from "./TiendaCafe/Disponible/disponible";
import "./App.css";

function App() {
  return (
    <div className="padre">
      <div className="Body">
        <div className="main-titulo">
          <h1>Nuestra Coleccion</h1>
          <br />

          <p>
            Te presentamos nuestra Coleccion de Café, una seleccion de cafes
            unicos de diferentes tipo de tueste y origenes, tostados de forma
            experta en pequeños lotes y enviados frescos semanalmente
          </p>
          <br />
        </div>
        <BrowserRouter>
          <nav>
            <NavLink to={"/Productos"}>Productos</NavLink>
            <NavLink to={"/Disponible"}>Disponibles</NavLink>
          </nav>
          <Routes>
            <Route element={<Seguridad permiso={true} />}>
              <Route index element={<Navigate to="/Productos" replace/>}/>
              <Route path="/Productos" element={<Productos />} />
              <Route path="/Disponible" element={<Disponible />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
