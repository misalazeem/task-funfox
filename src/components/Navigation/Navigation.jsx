import PropTypes from "prop-types";
import Button from "../Button/Button";
import ToggleLeft from "/images/toggleleft.png";
import ToggleRight from "/images/toggleright.png";
import Select from "../Input/Select";

const Navigation = ({ handleLeftButtonClick, handleRightButtonClick, handleNavigation, availableWeeks, currentWeek }) => {
  const isLeftDisabled = availableWeeks.indexOf(currentWeek) === 0;
  const isRightDisabled = availableWeeks.indexOf(currentWeek) === availableWeeks.length - 1;

  return (
    <div className="flex flex-row items-center justify-center">
      <Button image={ToggleLeft} onClick={handleLeftButtonClick} disabled={isLeftDisabled} />
      <Select handleNavigation={handleNavigation} options={availableWeeks} currentWeek={currentWeek} />
      <Button image={ToggleRight} onClick={handleRightButtonClick} disabled={isRightDisabled} />
    </div>
  );
}

Navigation.propTypes = {
  handleLeftButtonClick: PropTypes.func.isRequired,
  handleRightButtonClick: PropTypes.func.isRequired,
  handleNavigation: PropTypes.func.isRequired,
  availableWeeks: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentWeek: PropTypes.string.isRequired,
};

export default Navigation;
