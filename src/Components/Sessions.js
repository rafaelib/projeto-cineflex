import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Sessions = (props) => {
  const { idFilme } = useParams();
  const [image, setImage] = useState("");
  const { title, setTitle } = props;
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
        <h4>Selecione o horário</h4>
        <ul className="days-list">
          {days.map((i) => {
            const { id, date, weekday, showtimes } = i;
            return (
              <li key={id}>
                <span className="date">
                  {weekday} - {date}
                </span>
                <div className="container-btns">
                  {showtimes.map((i) => {
                    return (
                      <Link to={`/assentos/${i.id}`}>
                        <button>{i.name}</button>
                      </Link>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer title={title} image={image} weekday="" hour="" />
    </React.Fragment>
  );
};

export default Sessions;
