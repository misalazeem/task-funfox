import PropTypes from "prop-types";

const Input = ({ fontColor, placeholder, bgColor }) => {
  const inputStyle = {
    backgroundColor: bgColor || "transparent",
    color: fontColor || "#000"
  }
  
  return (
    <div className="w-[68%] border-dotted border-4 rounded-lg border-[#cccccc] p-2" style={{ backgroundColor: bgColor }}>
      <input type="text" className="w-full bg-transparent outline-none border-b-2 border-[#cccccc]" style={inputStyle} placeholder={placeholder} />
    </div>
  );
}

Input.propTypes = {
  bgColor: PropTypes.string,
  placeholder: PropTypes.string,
  fontColor: PropTypes.string,
};

export default Input;
