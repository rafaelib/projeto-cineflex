import React from "react";

const Footer = (props) => {
  const { image, title, date, weekday } = props;
  return (
    <footer>
      <span className="container-img">
        <img src={image} alt="" />
      </span>
      <span className="title">
        {title}
        <br />
        {`${weekday} - ${date}`}
      </span>
    </footer>
  );
};

export default Footer;
