import React from "react";

const Box = ({bgColor, borderColor, text, border, image}) => {
  console.log(bgColor);
  const boxStyle = {
    backgroundColor: bgColor,
    borderColor: borderColor,
  };

  return (
    <>
      {image ? (
        <>
        <div style={boxStyle} className={`flex flex-row justify-between border-${border} border-4 my-2 pr-8 shadow-xl`}>
          <p className="w-[85%] text-2xl p-4 lg:text-xl md:text-sm">{text}</p>
          <img src={image} />
        </div> 
        </>
      ) : (
        <>
        <div style={boxStyle} className={`border-${border} border-4 m-4`}>
          <p className="w-[90%] p-4 lg:text-2xl md:text-sm">{text}</p>
        </div> 
        </>
      )}
 
    </>
  );
}

export default Box;