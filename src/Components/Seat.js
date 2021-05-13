import React from "react";

const Seat = (props) => {
  const [selectedFlag, setSelectedFlag] = React.useState(false);
  const { isAvailable, name, id } = props;
  function selecionar() {
    if (!selectedFlag) {
      setSelectedFlag(true);
      console.log(name);
    } else {
      setSelectedFlag(false);
      console.log(name);
    }
  }
  function warning() {
    alert("lugar indisponivel");
  }
  return (
    <li
      className={
        isAvailable === false ? "unavailable" : selectedFlag ? "teste" : ""
      }
      onClick={isAvailable ? selecionar : warning}
    ></li>
  );
};

export default Seat;
