import React from "react";

const Footer = (props) => {
  const { image, title, movieDate } = props;
  return (
    <footer>
      <span className="container-img">
        <img src={image} alt="" />
      </span>
      <span className="title">
        {title}
        <br />
        {movieDate}
      </span>
    </footer>
  );
};

export default Footer;
