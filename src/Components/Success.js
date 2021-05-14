import React from "react";
import { Link } from "react-router-dom";

const Success = (props) => {
  const {
    title,
    hour,
    day,
    cpfValue,
    nameValue,
    seatsArray,
    setSeatsArray,
    setNameValue,
    setCpfValue,
  } = props;
  function resetData() {
    setCpfValue("");
    setNameValue("");
    setSeatsArray([]);
  }
  return (
    <React.Fragment>
      <main className="success-main">
        <h4 className="success-title">
          Pedido Feito
          <br />
          com sucesso
        </h4>
        <div className="info-list">
          <span className="info-title">Filme e Sessão</span>
          <p>{title}</p>
          <p>{`${day} ${hour}`}</p>
        </div>
        <div className="info-list">
          <span className="info-title">Igressos</span>
          {seatsArray.map((i) => {
            return <p>Assento {i}</p>;
          })}
        </div>
        <div className="info-list">
          <span className="info-title">Comprador</span>
          <p>Nome: {nameValue}</p>
          <p>CPF: {cpfValue}</p>
        </div>
      </main>
      <div className="container-reserve-btn">
        <Link to="/">
          <button onClick={resetData} className="home-btn">
            Voltar pra Home
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Success;
