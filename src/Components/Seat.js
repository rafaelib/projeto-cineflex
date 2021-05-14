import React from "react";

const Seat = (props) => {
  const [selectedFlag, setSelectedFlag] = React.useState(false);
  const { reservedSeats, setReservedSeats, seatsArray, setSeatsArray } = props;
  const { isAvailable, name, id } = props;
  function select() {
    if (!selectedFlag) {
      setSelectedFlag(true);
      setReservedSeats([...reservedSeats, id]);
      setSeatsArray([...seatsArray, name]);
    } else {
      setSelectedFlag(false);
      setReservedSeats(reservedSeats.filter((i) => i !== id));
      setSeatsArray(seatsArray.filter((i) => i !== name));
    }
  }
  function warning() {
    alert("Este assento não está disponível");
  }
  return (
    <li
      className={
        isAvailable === false ? "unavailable" : selectedFlag ? "selected" : ""
      }
      onClick={isAvailable ? select : warning}
    >
      {name}
    </li>
  );
};

export default Seat;
