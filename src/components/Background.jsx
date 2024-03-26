import React from "react";
import PencilImage from '/images/pencil.png';
import Week from '/images/week.png'
import Logo from '/images/assets/logo.png';

const Background = () => {
  return (
    <>
      <img src={Logo}
      className="absolute top-[1%] left-[2%]"
      />
      <img src={PencilImage}
      className="absolute top-[20%] left-0"
      />
      <div className ="absolute top-[3%] left-[15%]">
        <img src={Week} />
        <label className="absolute top-2 left-[25%] p-2">Week 1</label>
      </div>
    </>
  );
}

export default Background;