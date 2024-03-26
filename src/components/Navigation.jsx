import React from "react";
import Button from "./Button";
import ToggleLeft from "/images/toggleleft.png";
import ToggleRight from "/images/toggleright.png";
import Select from "./Select";

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

export default Navigation;
