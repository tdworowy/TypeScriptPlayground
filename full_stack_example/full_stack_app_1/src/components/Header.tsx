import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Header = ({ message }: any) => {
  const color = Math.random() > 0.5 ? "green" : "red";
  return (
    <h2 className="Header" style={{ color: color }}>
      {message}
    </h2>
  );
};
Header.propTypes = {
  message: PropTypes.string,
};
Header.defaultProps = {
  message: "Default",
};
export default Header;
