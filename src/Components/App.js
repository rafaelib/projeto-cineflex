import React from "react";
import Header from "./Header";
import axios from "axios";

const App = () => {
  const [step, useStep] = React.useState("Selecione o filme");
  const [arrayBanners, setArrayBanners] = React.useState([]);

  function toProcessAnswer(response) {
    const { data } = response;
    //setArrayBanners(data);
    console.log(data);
  }

  const requestMovies = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies"
  );
  requestMovies.then(toProcessAnswer);

  return (
    <React.Fragment>
      <Header />
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
    </React.Fragment>
  );
};

export default App;
