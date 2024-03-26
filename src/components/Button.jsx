import React from "react";

const Button = ({image}) => {
  return (
    <>
      <button type="button">
        <img src={image} />
      </button>
    </>
  );
}

export default Button;