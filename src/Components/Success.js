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
    setNameValue,
    setCpfValue,
  } = props;
  function resetData() {
    setCpfValue("");
    setNameValue("");
  }
  return (
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
      <Link to="/">
        <button onClick={resetData} className="home-btn">
          Voltar pra Home
        </button>
      </Link>
    </main>
  );
};

export default Success;
