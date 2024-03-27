import PropTypes from "prop-types";

const Heading = ({text}) => {
    return (
    <>
      <div 
      className="w-auto text-center bg-[#FE6784] my-2 border-[#FFAEBE] border-4 border-dotted py-2 px-8 rounded-r-3xl rounded-l-3xl shadow-2xl ">
        <h2 className="text-2xl">{text}</h2>
      </div>
    </>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;