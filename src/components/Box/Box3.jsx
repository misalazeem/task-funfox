import PropTypes from "prop-types"

const Box3 = ({ bgColor, borderColor, border, image1, image2 }) => {
  const boxStyle = {
    backgroundColor: bgColor,
    borderColor: borderColor,
  };

  return (
    <>
      <div
        style={boxStyle}
        className={`flex flex-row justify-between border-${border} border-4 my-2 pr-8 shadow-xl`}
      >
        <div className="inline-block text-left">
          <p className="text-2xl p-4 lg:text-xl md:text-base">
            <span className="inline-block">Setting is the time</span>{" "}
            <span className="inline-block align-middle"><img src={image1} className="inline px-2" /></span>
            <span className="inline-block">and place</span>{" "}
            <span className="inline-block align-middle"><img src={image2} className="inline px-2" /></span>
            of a story. It often answers the questions: when? and where?
          </p>
        </div>
      </div>
    </>
  );
};

Box3.propTypes = {
  bgColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  image1: PropTypes.string,
  image2: PropTypes.string,
};

export default Box3;