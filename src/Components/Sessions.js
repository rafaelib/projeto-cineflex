import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

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
    });
  }, []);

  return (
    <React.Fragment>
      <main>
        <h4 className="step">Selecione o horário</h4>
        <ul className="days-list">
          {days.map((i) => {
            const { id, date, weekday, showtimes } = i;
            return (
              <li key={id}>
                <span className="date">
                  {weekday} - {date}
                </span>
                <div className="container-btns">
                  <Link to={`/assentos/${showtimes[0].id}`}>
                    <button>{showtimes[0].name}</button>
                  </Link>
                  <Link to={`/assentos/${showtimes[1].id}`}>
                    <button>{showtimes[1].name}</button>{" "}
                    {/* REFATORAR DEPOIS */}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer title={title} image={image} />
    </React.Fragment>
  );
};

export default Sessions;
