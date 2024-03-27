import PropTypes from 'prop-types';

const Paragraph2 = ({ fontColor, text }) => {
  const textStyle = {
    color: fontColor
  };

  return (
    <p style={textStyle} className="my-4 px-4 lg:text-lg md:text-base">
      {text}
    </p>
  );
}

Paragraph2.propTypes = {
  text: PropTypes.string.isRequired,
  fontColor: PropTypes.string,
};

export default Paragraph2;
