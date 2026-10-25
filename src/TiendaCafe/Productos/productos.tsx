import { useEffect, useState } from "react";
import "./productos.css";

type Coffee = {
  id: string;
  name: string;
  price: string;
  image: string;
  rating: string;
  votes: string;
};

const Productos = () => {
  const [productos, setProductos] = useState<Coffee[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json",
    )
      .then((respuesta) => respuesta.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <div className="productos">
      {productos.map((coffee) => (
        <div key={coffee.id}>
          <div>
            <img src={coffee.image} alt="cafe" />
          </div>
          <div className="producto-especifico">
            <div className="cafe-nombre">
              <h4>{coffee.name}</h4>
            </div>
            <div className="cafe-precio">
              <p>{coffee.price}</p>
            </div>
          </div>
          <p>
            <strong>{coffee.rating} Puntuacion </strong> ({coffee.votes})
          </p>
        </div>
      ))}
    </div>
  );
};

export default Productos;
