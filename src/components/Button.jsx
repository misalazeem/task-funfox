import React from "react";

const Button = ({ image, onClick, disabled }) => {
  const handleClick = () => {
    if (typeof onClick === 'function' && !disabled) {
      onClick();
    }
  };

  return (
    <button type="button" onClick={handleClick} disabled={disabled} className={`cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <img src={image} alt="Button" />
    </button>
  );
}

export default Button;
