import React from "react";
import Heading2 from "../components/Heading2";
import Paragraph from "../components/Paragraph";
import Paragraph2 from "../components/Paragraph2";
import Button from "../components/Button";
import Image from "/images/image1.png"
import Image1 from "/images/image2.png"
import Card from "../components/Card";
import Input from "../components/Input";
import Clock from "/images/clock.png";
import HomeImage from "/images/home.png";
import Box3 from "../components/Box3";
import ClockLittle from "/images/clocklittle.png";
import HomeLittle from "/images/homelittle.png";
import ModalButton from "/images/modalbutton.png"

const Week2 = () => {
  return (
    <>
      <div className="flex flex-col pt-24 mx-20">
        <div className="flex flex-col bg-[#F7F9FE] rounded-3xl p-4 pb-8">
          <Heading2 text="Can you figure out the definition of setting from the following examples?" />
          <Paragraph text="(take a minute to think about this)" />
          <div className="flex flex-row justify-evenly my-2">
            <Card image={Image} text="Sunny day at a beach"/>
            <Card image={Image1} text="A cold rainy night in a haunted house in October"/>
          </div>
          <Paragraph2 text="So, what do you think the definition of setting is?"/>
          <div className="flex flex-row items-center">
            <Paragraph2 text="Any guesses?" />
            <Input />
            <Paragraph2 text="Hint: " />
            <div className="flex-grow">
              <div className="flex flex-row justify-between">
                <Button image={Clock}/>
                <Button image={HomeImage} />
              </div>
            </div>
          </div>
          <Box3 bgColor="#25A3A1" border="dotted" borderColor="#A4FDFB" image1={ClockLittle} image2={HomeLittle} />
          <Paragraph text="The time of the story could be in the past, future, day, night, summer or winter. A story may take place in a school, a mall, a desert, an airplane or in a variety of other places." />
        </div>
    </div>
    <div className="absolute 2xl:top-[65%] right-[15px] lg:top-[65%] right-[15px] sm:top-[43%] right-[10px]">
      <Button image={ModalButton} disabled={false}/>
    </div>
    </>
  );
}

export default Week2;