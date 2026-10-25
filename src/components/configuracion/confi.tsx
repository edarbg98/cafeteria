import React, { useState } from "react";
import "./confi.css";
type Props = {
  setTexto: (valor: string) => void;
  setRush1: (valor: string) => void;
  setCurador1: (valor: string) => void;
};

export const Confi = ({ setTexto, setRush1, setCurador1 }: Props) => {
  const [soporte, setSoporte] = useState<string>("");
  const soporteFuncion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSoporte(e?.target.value as string);
  };

  const confiSuporFunciont = () => {
    setTexto(soporte);
    setSoporte("");
    botonFucion1();
  };

  const [rush, setRush] = useState<string>("");
  const rushFuncion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRush(e?.target.value as string);
  };

  const confiRushFunciont = () => {
    setRush1(rush);
    setRush("");
    botonFucion2();
  };

  const [curador, setCurador] = useState<string>("");
  const curadorFuncion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurador(e?.currentTarget.value as string);
  };

  const confiCuradorFunciont = () => {
    setCurador1(curador);
    setCurador("");
    botonFucion3()
  };

  const [boton1, setBoton1] = useState<boolean>(false)
  const botonFucion1 = () => {
    setBoton1(true)
  }

const [boton2, setBoton2] = useState<boolean>(false);
const botonFucion2 = () => {
  setBoton2(true);
};
const [boton3, setBoton3] = useState<boolean>(false);
const botonFucion3 = () => {
  setBoton3(true);
};

  return (
    <div className="div">
      <div>
        <h2>Crear tu equipo con el rol especifico</h2>
      </div>
      <div>
        <h4>Soporte</h4>
        <input
          type="text"
          placeholder="Ej: Daniela"
          disabled={boton3}
          value={soporte}
          onChange={soporteFuncion}
        />
        <button disabled={boton1} onClick={confiSuporFunciont}>
          Confirmar
        </button>
      </div>
      <div>
        <h4>Rush</h4>
        <input
          type="text"
          placeholder="Ej: Edar"
          disabled={boton3}
          value={rush}
          onChange={rushFuncion}
        />
        <button disabled={boton2} onClick={confiRushFunciont}>
          Confirmar
        </button>
      </div>
      <div>
        <h4>Curador</h4>
        <input
          type="text"
          placeholder="Ej: Nicol"
          disabled={boton3}
          value={curador}
          onChange={curadorFuncion}
        />
        <button disabled={boton3} onClick={confiCuradorFunciont}>
          Confirmar
        </button>
      </div>
      <p>SOLO TIENE UNA VEZ PARA INSCRIBIR A TU EQUIPO</p>
    </div>
  );
};

export default Confi;
