import React from 'react'
import "./KButton.css";

export const ButtonStyle = {
  Normal: 'btn__normal',
  Outline: 'btn__outline'
}

export const ButtonColor = {
  Red: 'red',
  Blue: 'blue',
  Green: 'green'
}

export const ButtonSize = {
  Small: 'btn__small',
  Medium: 'btn__medium',
  Large: 'btn__large',
  Mobile: 'btn__mobile'
}


const KButton = ({
  children,
  buttonStyle,
  buttonSize,
  buttonColor,
  type,
  onClick
}) => {
  
  let checkButtonStyle = Object.values(ButtonStyle).includes(buttonStyle)
    ? buttonStyle
    : ButtonStyle.Normal;
     
  const checkButtonSize = Object.values(ButtonSize).includes(buttonSize) 
    ? buttonSize 
    : ButtonSize.Medium;

  const checkButtonColorTemp = Object.values(ButtonColor).includes(buttonColor) ? buttonColor : '';

  const checkButtonColor = checkButtonStyle === ButtonStyle.Outline ? `${checkButtonColorTemp}-outline` : checkButtonColorTemp;

  checkButtonStyle = checkButtonColorTemp === ''? checkButtonStyle: '';
  // console.log(`btn ${checkButtonStyle} ${checkButtonColor} ${checkButtonSize}`);

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default KButton
