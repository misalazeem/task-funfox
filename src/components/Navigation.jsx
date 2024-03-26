import React from "react";
import Button from "./Button";
import ToggleLeft from "/images/toggleleft.png";
import ToggleRight from "/images/toggleright.png";

const Navigation = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Button image={ToggleLeft} />
      <Button image={ToggleRight} />
    </div>
  );
}

export default Navigation;