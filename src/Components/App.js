import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Success from "./Success";

const App = () => {
  const [title, setTitle] = useState("");
  const [hour, setHour] = useState("");
  const [day, setDay] = useState("");
  const [cpfValue, setCpfValue] = useState([]);
  const [nameValue, setNameValue] = useState([]);
  const [seatsArray, setSeatsArray] = useState([]);
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sessoes/:idFilme" exact>
            <Sessions title={title} setTitle={setTitle} />
          </Route>
          <Route path="/assentos/:idSessao" exact>
            <Seats
              hour={hour}
              setHour={setHour}
              day={day}
              setDay={setDay}
              cpfValue={cpfValue}
              setCpfValue={setCpfValue}
              nameValue={nameValue}
              setNameValue={setNameValue}
              seatsArray={seatsArray}
              setSeatsArray={setSeatsArray}
            />
          </Route>
          <Route path="/sucesso" exact>
            <Success
              title={title}
              hour={hour}
              day={day}
              setCpfValue={setCpfValue}
              cpfValue={cpfValue}
              setNameValue={setNameValue}
              nameValue={nameValue}
              seatsArray={seatsArray}
              setSeatsArray={setSeatsArray}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
