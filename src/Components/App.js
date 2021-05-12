import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import Main from "./Main";

const App = () => {
  const [step, useStep] = React.useState("Selecione o filme");
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
    <React.Fragment>
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default App;
