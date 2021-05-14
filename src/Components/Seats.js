import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seat from "./Seat";
import Footer from "./Footer";
import Options from "./Options";

const Seats = () => {
  const id = useParams().idSessao;
  const [seats, setSeats] = useState([]);
  const [weekday, setWeekday] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [serverObject, setServerObject] = useState({
    ids: {},
    name: "",
    cpf: "",
  });
  const [reservedSeats, setReservedSeats] = useState([]);
  const [cpfValue, setCpfValue] = useState([]);
  const [nameValue, setNameValue] = useState([]);

  function teste() {
    serverObject.ids = reservedSeats;
    setServerObject(serverObject);
    console.log(serverObject);
  }

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
        <h4>Selecione o(s) assento(s)</h4>
        <ul className="seats-list">
          {seats.map((i) => {
            const { id, name, isAvailable } = i;
            return (
              <Seat
                serverObject={serverObject}
                setServerObject={setServerObject}
                reservedSeats={reservedSeats}
                setReservedSeats={setReservedSeats}
                name={name}
                id={id}
                isAvailable={isAvailable}
              />
            );
          })}
        </ul>
        <Options />
      </main>
      <div className="inputs-container">
        <span>Nome do comprador:</span>
        <input type="text" placeholder="Digite seu nome..." />

        <span>CPF do comprador:</span>
        <input type="text" placeholder="Digite seu nome..." />
      </div>
      <div className="container-reserve-btn">
        <button onClick={teste} className="reserve-btn">
          Reservar assento(s)
        </button>
      </div>
      <Footer title={title} image={image} weekday={weekday} date={date} />
    </React.Fragment>
  );
};

export default Seats;
