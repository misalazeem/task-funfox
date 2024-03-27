import PropTypes from "prop-types";

const Box = ({bgColor, borderColor, text, border, image}) => {
  const boxStyle = {
    backgroundColor: bgColor,
    borderColor: borderColor,
  };

  return (
    <>
      {image ? (
        <>
        <div style={boxStyle} className={`flex flex-row justify-between border-${border} border-4 my-2 pr-8 shadow-xl`}>
          <p className="w-[85%] text-2xl p-4 lg:text-xl md:text-base">{text}</p>
          <img src={image} />
        </div> 
        </>
      ) : (
        <>
        <div style={boxStyle} className={`border-${border} border-4 m-4`}>
          <p className="w-[90%] p-4 lg:text-2xl md:text-base">{text}</p>
        </div> 
        </>
      )}
 
    </>
  );
}

Box.propTypes = {
  bgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Box;