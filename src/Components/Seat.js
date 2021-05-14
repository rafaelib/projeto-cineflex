import React from "react";

const Seat = (props) => {
  const [selectedFlag, setSelectedFlag] = React.useState(false);
  const [reservedSeats, setReservedSeats] = React.useState([]);
  const { isAvailable, name, id } = props;
  function selecionar() {
    if (!selectedFlag) {
      setSelectedFlag(true);
      setReservedSeats([...reservedSeats, id]);
    } else {
      setSelectedFlag(false);
    }
  }
  function warning() {
    alert("Este assento não está disponível");
  }
  return (
    <li
      className={
        isAvailable === false ? "unavailable" : selectedFlag ? "teste" : ""
      }
      onClick={isAvailable ? selecionar : warning}
    >
      {name}
    </li>
  );
};

export default Seat;
