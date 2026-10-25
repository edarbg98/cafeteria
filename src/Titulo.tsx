import React, { useState } from "react";
import "./index.css";

function Titulo() {
  const [usuario, setUsuario] = useState("");
  const UsuarioValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsuario(e.target.value);
  };

  const [nombreConfirmado, setConfirmado] = useState("");
  const click = () => {
    setConfirmado(usuario);
  };

  const [apellido, setApellido] = useState("");
  const verificar = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApellido(e.target.value);
  };

  const [apellido2, setApellido2] = useState("");
  const clikear = () => {
    setApellido2(apellido);
  };

  const [datos, setDatos] = useState("")
  const resultado = () => {
    setDatos(`${usuario} ${apellido}`)
  }

  return (
    <div>
      <h2>Bienvenido a mi pagina</h2>
      <br />
      <span>Me llamo Edar Briceño Guarniz</span>
      <p>Como te llamas ?</p>
      <br />
      <input
        type="text"
        placeholder="Ej: Edar"
        id="nombre"
        onChange={UsuarioValue}
      />
      <button type="button" onClick={click}>
        Clikear
      </button>
      <p>
        Gracias {nombreConfirmado} por visitar a mi primer pagina basica con
        React
      </p>
      <br />
      <h3>Dime tu apellido</h3>
      <input type="text" placeholder="Briceño" onChange={verificar} />
      <button type="button" onClick={clikear}>
        Clikear
      </button>
      <p>Guaau tu apellido es {apellido2}</p>
      <br />
      <button type="button" onClick={resultado}>Mostrar Datos</button>
      <p>
        Tus datos : {datos}
      </p>
      <br />
      <h3>Vamo a jugar con el contador, {nombreConfirmado}</h3>
    </div>
  );
}

export default Titulo;
