import PropTypes from "prop-types";

const Card = ({ image, text }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex px-6 py-2 border-[#cccccc] items-center border-dotted border-4 rounded-lg">
          <img src={image} alt="sunnybeach" />
        </div>
        <div className="text-center mt-2 max-w-[300px]">
          <p className="text-black text-xl">{text}</p>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;