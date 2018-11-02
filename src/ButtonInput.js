import React from "react";

const Button = ({ number, onClick }) => {
  return <button onClick={onClick}>{number}</button>;
};

export default Button;
