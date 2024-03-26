import React from "react";
import Heading from "../components/Heading";
import Box from "../components/Box";
import boxImage from '/images/box.png'
import Cloud from "../components/Cloud";
import cloudImage from "/images/cloud.png"
import cloudImage1 from "/images/cloud1.png"
import cloudImage2 from "/images/cloud2.png"
import cloudImage3 from "/images/cloud3.png"
import cloudImage4 from "/images/cloud4.png"
import Paragraph from "../components/Paragraph";
import Box2 from "../components/Box2";
import Footer from "../components/Footer";
const heading = "Elements of Story Writing";

const Week1 = () => { 
  return (
    <>
      <div className="flex flex-col pt-24 mx-20">
        <div className="flex flex-col items-center bg-[#F7F9FE] rounded-3xl p-4 pb-8">
          <Heading text={heading} />
          <Paragraph text="Welcome to term 2 of Writers Club. Are you excited for this amazing journey? Over the next week, we will be practicing the different elements of story writing. Our aim is to make stories more interesting and exciting." />
          <Box bgColor="#25A3A1" border="dotted" borderColor="#A4FDFB" text="There are elements which make the foundation for story writing. An element is an essential part of something and every fiction story has the same key elements:" image={boxImage} />
          <div className="w-full flex flex-row align-center my-2 justify-between">
            <Cloud text="SETTING" image={cloudImage}/>
            <Cloud text="CHARACTERS" image={cloudImage1}/>
            <Cloud text="PLOT" image={cloudImage2}/>
            <Cloud text="PROBLEM OR CONFLICT" image={cloudImage3}/>
            <Cloud text="RESOLUTION" image={cloudImage4}/>
          </div>
          <Paragraph text="You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along."/>
          <Box2 />          
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Week1;