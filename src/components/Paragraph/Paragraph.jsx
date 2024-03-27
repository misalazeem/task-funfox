import PropTypes from "prop-types";

const Paragraph = ({text}) => {
  return (
    <>
      <p className="text-[#1E242F] my-4 px-4 lg:text-xl md:text-base">{text}</p>
    </>
  );
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;