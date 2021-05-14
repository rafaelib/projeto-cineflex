import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seat from "./Seat";
import Footer from "./Footer";

const Seats = () => {
  const [seats, setSeats] = useState([]);
  const [weekday, setWeekday] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const id = useParams().idSessao;
  useEffect(() => {
    const request = axios.get(
      `
https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats
`
    );

    request.then((response) => {
      setWeekday(response.data.day.weekday);
      setDate(response.data.day.date);
      setImage(response.data.movie.posterURL);
      setTitle(response.data.movie.title);
      setSeats(response.data.seats);
    });
  }, []);
  return (
    <React.Fragment>
      <main>
        <h4 className="step">Selecione o(s) assento(s)</h4>
        <ul className="seats-list">
          {seats.map((i) => {
            const { id, name, isAvailable } = i;
            return <Seat name={name} id={id} isAvailable={isAvailable} />;
          })}
        </ul>
        <ul className="select-options">
          <div className="option">
            <li style={{ background: "green" }}></li>
            <span>Selecionado</span>
          </div>
          <div className="option">
            <li></li>
            <span>Disponível</span>
          </div>
          <div className="option">
            <li style={{ background: "yellow" }}></li>
            <span>Indisponível</span>
          </div>
        </ul>
      </main>

      <Footer title={title} image={image} weekday={weekday} date={date} />
    </React.Fragment>
  );
};

export default Seats;
