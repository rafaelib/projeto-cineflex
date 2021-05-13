import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Sessions = () => {
  const { idFilme } = useParams();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [days, setDays] = useState([]);

  useEffect(() => {
    const request = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`
    );

    request.then((response) => {
      const { data } = response;
      const { posterURL, title, days } = data;
      setImage(posterURL);
      setTitle(title);
      setDays(days);
      console.log(title);
      console.log(data);
    });
  }, []);

  return (
    <React.Fragment>
      <main>
        <h4 className="step">Selecione o horário</h4>
        <ul className="days-list">
          {days.map((i) => {
            return (
              <li key={i.id}>
                {console.log(i)}
                <span className="date">
                  {i.weekday} - {i.date}
                </span>
                <div className="container-btns">
                  <button>{i.showtimes[0].name}</button>
                  <button>{i.showtimes[1].name}</button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
      <footer>
        <span className="container-img">
          <img src={image} alt="banner filme" />
        </span>
        <span className="title">{title}</span>
      </footer>
    </React.Fragment>
  );
};

export default Sessions;
