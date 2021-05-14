import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [arrayBanners, setArrayBanners] = useState([]);

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
      <h4>Selecione o filme</h4>
      <ul>
        {arrayBanners.map((i) => {
          const { id, posterURL } = i;
          return (
            <Link to={`/sessoes/${id}`}>
              <li key={i.id} {...i}>
                <img src={posterURL} alt="" />
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
};

export default Home;
