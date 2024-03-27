import PropTypes from "prop-types";
import Button from "../Button/Button";
import LeftButton from "/images/buttonleft.png";
import RightButton from "/images/buttonright.png";
import Navigation from "./Navigation";

const Footer = ({handleNavigation, availableWeeks, currentWeek}) => {
  const handleLeftButtonClick = () => {
    handleNavigation('Week 1');
  };
  
  const handleRightButtonClick = () => {
    handleNavigation('Week 2');
  };
  return (
    <div className="flex flex-row justify-between items-center py-8 mx-20">
      <Button image={LeftButton} />
      <Navigation
        handleLeftButtonClick={handleLeftButtonClick}
        handleRightButtonClick={handleRightButtonClick}
        handleNavigation={handleNavigation}
        availableWeeks={availableWeeks}
        currentWeek={currentWeek}
      />
      <Button image={RightButton} />
    </div>
  );
}

Footer.propTypes = {
  handleNavigation: PropTypes.func.isRequired,
  currentWeek: PropTypes.string.isRequired,
  availableWeeks: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Footer;
