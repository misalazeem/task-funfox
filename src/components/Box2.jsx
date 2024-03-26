import React from "react";
import Paragraph from "./Paragraph";

const Box2 = ({text}) => {
  return (
    <>
      <div className="w-full bg-rose-400 px-4 pt-2 pb-4 my-2 rounded-2xl shadow-xl">
        <div className="bg-box-bg py-4 px-8 bg-cover bg-no-repeat">
          <Paragraph text="For today’s lesson, we will try to understand and practice writing the setting for our stories." />
          <Paragraph text="The setting is an important element of every fiction story."/>
        </div>
      </div>
    </>
  );
}

export default Box2;