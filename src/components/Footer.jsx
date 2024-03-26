import React from "react";
import Button from "./Button";
import LeftButton from '/images/buttonleft.png';
import RightButton from '/images/buttonright.png';
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center py-8">
        <Button image={LeftButton} />
        <Navigation />
        <Button image={RightButton} />
      </div>
    </>
  );
}

export default Footer;