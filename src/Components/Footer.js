import React from "react";

const Footer = (props) => {
  const x = "-";
  const { image, title, hour, weekday } = props;
  return (
    <footer>
      <span className="container-img">
        <img src={image} alt="" />
      </span>
      <span className="title">
        {title}
        <br />
        {`${weekday} - ${hour}`}
      </span>
    </footer>
  );
};

export default Footer;
