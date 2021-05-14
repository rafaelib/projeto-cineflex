import React from "react";

const Options = () => {
  return (
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
  );
};

export default Options;
