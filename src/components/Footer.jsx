import React from "react";
import Button from "./Button";
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

export default Footer;
