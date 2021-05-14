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
    });
  }, []);
  return (
    <main>
      <h4 className="step">Selecione o filme</h4>
      <ul className="home-list">
        {arrayBanners.map((i) => {
          const { id, posterURL } = i;
          return (
            <Link key={i.id} to={`/sessoes/${id}`}>
              <li {...i}>
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
