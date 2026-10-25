import "./roles.css";

type Props = {
  texto: string;
  rush1: string;
  curador1: string;
};

const Roles = ({ texto, rush1, curador1 }: Props) => {
  return (
    <div className="div-padre">
      <div className="titulo-padre">
        <h2>ROLES</h2>
      </div>
      <div className="soporte">
        <h4>Soporte</h4>
        {texto && <p>{texto}</p>}
      </div>
      <div className="rush">
        <h4>Rush</h4>
        {rush1 && <p>{rush1}</p>}
      </div>
      <div className="curador">
        <h4>Curador</h4>
        {curador1 && <p>{curador1}</p>}
      </div>
    </div>
  );
};

export default Roles;
