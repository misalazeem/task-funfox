import PropTypes from "prop-types";

const Cloud = ({text, image}) => {
  return (
    <div className="relative inline-block w-[18%]">
      <img className="w-full" src={image} />
      <label className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black p-2 lg:text-xl md:text-xs">{text}</label>
    </div>
  );
}

Cloud.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Cloud;