import PropTypes from "prop-types";

const Button = ({ image, onClick, disabled }) => {
  const handleClick = () => {
    if (typeof onClick === 'function' && !disabled) {
      onClick();
    }
  };

  return (
    <button type="button" onClick={handleClick} disabled={disabled} className={`cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <img src={image} alt="Button" />
    </button>
  );
}

Button.propTypes = {
  image: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool, 
};

export default Button;
