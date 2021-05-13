import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seat from "./Seat";

const Seats = () => {
  const [seats, setSeats] = useState([]);
  const id = useParams().idSessao;
  console.log(id);
  useEffect(() => {
    const request = axios.get(
      `
https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${id}/seats
`
    );

    request.then((response) => {
      console.log(response.data.seats);
      setSeats(response.data.seats);
    });
  }, []);
  return (
    <main>
      <h4 className="step">Selecione o(s) assento(s)</h4>
      <ul className="seats-list">
        {seats.map((i) => {
          const { id, name, isAvailable } = i;
          console.log(isAvailable);
          return <Seat name={name} id={id} isAvailable={isAvailable} />;
        })}
      </ul>
    </main>
  );
};

export default Seats;
