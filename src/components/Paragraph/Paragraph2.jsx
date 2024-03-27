import React from "react";

const Paragraph2 = ({ fontColor, text }) => {
  const textStyle = {
    color: fontColor
  };

  return (
    <p style={textStyle} className="my-4 px-4 lg:text-lg md:text-sm">
      {text}
    </p>
  );
}

export default Paragraph2;
