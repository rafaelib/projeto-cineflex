import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seat from "./Seat";
import Footer from "./Footer";
import Options from "./Options";
import { Link } from "react-router-dom";

const Seats = (props) => {
  const {
    hour,
    setHour,
    setDay,
    cpfValue,
    setCpfValue,
    nameValue,
    setNameValue,
    seatsArray,
    setSeatsArray,
  } = props;
  const id = useParams().idSessao;
  const [seats, setSeats] = useState([]);
  const [weekday, setWeekday] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [serverObject, setServerObject] = useState({
    ids: {},
    name: "",
    cpf: "",
  });
  const [reservedSeats, setReservedSeats] = useState([]);

  function sendObject() {
    serverObject.ids = reservedSeats;
    serverObject.name = nameValue;
    serverObject.cpf = cpfValue;
    setServerObject(serverObject);
    const send = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`,
      serverObject
    );
  }

  useEffect(() => {
    const request = axios.get(
      `
https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats
`
    );

    request.then((response) => {
      setWeekday(response.data.day.weekday);
      setDay(response.data.day.date);
      setImage(response.data.movie.posterURL);
      setTitle(response.data.movie.title);
      setSeats(response.data.seats);
      setHour(response.data.name);
    });
  }, []);
  return (
    <React.Fragment>
      <main>
        <h4 className="step">Selecione o(s) assento(s)</h4>
        <ul className="seats-list">
          {seats.map((i) => {
            const { id, name, isAvailable } = i;
            return (
              <Seat
                seatsArray={seatsArray}
                setSeatsArray={setSeatsArray}
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
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />

        <span>CPF do comprador:</span>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={cpfValue}
          onChange={(e) => setCpfValue(e.target.value)}
        />
      </div>
      <div className="container-reserve-btn">
        <Link to="/sucesso">
          <button onClick={sendObject} className="reserve-btn">
            Reservar assento(s)
          </button>
        </Link>
      </div>
      <Footer title={title} image={image} movieDate={`${weekday} - ${hour}`} />
    </React.Fragment>
  );
};

export default Seats;
