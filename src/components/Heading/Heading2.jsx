import PropTypes from "prop-types";

const Heading2 = ({text}) => {
    return (
    <>
      <div 
      className="my-2">
        <h2 className="text-3xl px-4 text-[#1E242F]">{text}</h2>
      </div>
    </>
  );
}

Heading2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading2;