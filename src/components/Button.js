import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large", "btn--mobile"];
const COLOR = ["primary", "blue", "red", "green"];
const Button = ({
  children,
  buttonStyle,
  buttonSize,
  buttonColor,
  type,
  onClick,
}) => {

  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : '';

  console.log(`btn ${checkButtonStyle} ${checkButtonColor} ${checkButtonSize}`);

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonColor} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
