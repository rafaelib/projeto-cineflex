import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [arrayBanners, setArrayBanners] = useState([]);
  const [step, useStep] = React.useState("Selecione o filme");

  useEffect(() => {
    const requestMovies = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies"
    );

    requestMovies.then((response) => {
      const { data } = response;
      setArrayBanners(data);
      console.log(data);
    });
  }, []);
  return (
    <main>
      <h4 className="step">{step}</h4>
      <ul>
        {arrayBanners.map((i) => {
          const { id, overview, releaseDate, title, posterURL } = i;
          return (
            <li key={i.id} {...i}>
              <img src={posterURL} alt="" />
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Main;
