import React from "react";
import Header from "./Header";

const App = () => {
  const [step, useStep] = React.useState("Selecione o filme");

  const arrayMovies = [
    {
      key: "1",
      img: "https://pbs.twimg.com/profile_images/1316575764427538433/yJdxtbBh.jpg",
    },
    {
      key: "2",
      img: "https://pbs.twimg.com/profile_images/1316575764427538433/yJdxtbBh.jpg",
    },
    {
      key: "3",
      img: "https://pbs.twimg.com/profile_images/1316575764427538433/yJdxtbBh.jpg",
    },
    {
      key: "43",
      img: "https://pbs.twimg.com/profile_images/1316575764427538433/yJdxtbBh.jpg",
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <main>
        <span className="step">{step}</span>
        <section></section>
      </main>
    </React.Fragment>
  );
};

export default App;
