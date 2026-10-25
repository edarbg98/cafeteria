import { useEffect, useState } from "react";

type Coffee = {
  price: string;
  id: number;
  name: string;
  image: string;
  rating: string;
  votes: string;
  available: boolean;
};
const Disponibles = () => {
  const [coffee, setCoffe] = useState<Coffee[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json",
    )
      .then((respuesta) => respuesta.json())
      .then((data) => setCoffe(data));
  }, []);

  return (
    <div className="productos">
      {coffee
        .filter((coffee) => coffee.available === true)
        .map((coffee) => (
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

export default Disponibles;
