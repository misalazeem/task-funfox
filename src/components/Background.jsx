import PencilImage from '/images/pencil.png';
import Week from '/images/week.png'
import Logo from '/images/assets/logo.png';
import Left from '/images/backgroundleft.png';
import Right from '/images/backgroundright.png';
import BackPack from '/images/backpack.png';
import Book from '/images/book.png';
import Scale from '/images/scale.png';
import Book2 from '/images/book2.png';
import Hat from '/images/hat.png';
import PropTypes from "prop-types";

const Background = ({number}) => {
  return (
    <>
    <div>
        <img src={Logo}
        className="absolute top-[1%] left-[2%]"
        />
        <img src={Left}
        className="absolute 2xl:top-[18%] left-0 lg:top-[27%] left-0 sm:top-[15%] left-0"
        />
        <img src={Right}
        className="absolute right-0 2xl:top-[8%] lg:top[8%] sm:top-[5%]"
        />
        <img src={PencilImage}
        className="absolute 2xl:top-[19%] left-0 lg:top-[28%] left-0 sm:top-[16%] left-0"
        />

        <img src={BackPack}
        className="absolute 2xl:top-[70%] left-[-1%] lg:top-[70%] left-[-1%] sm:top-[41%] left-[-1%]"
        />

        <img src={Book}
        className="absolute left-[5px] 2xl:top-[120%] lg:top-[120%] sm:top-[70%]"
        />

        <img src={Scale}
        className="absolute 2xl:top-[15%] right-[-3px] lg:top-[17%] right-[-3px] sm:top-[12%] right-[-3px]"
        />

        <img src={Book2}
        className="absolute 2xl:top-[65%] right-[15px] lg:top-[65%] right-[15px] sm:top-[43%] right-[10px]"
        />

        <img src={Hat}
        className="absolute 2xl:top-[120%] right-0 lg:top-[120%] right-0 sm:top-[68%] right-0"
        />

        <div className ="absolute top-[3%] 2xl:left-[10%] lg:left-[15%] md:left-[25%]">
          <img src={Week} />
          <label className="absolute top-2 left-[25%] p-2">Week {number}</label>
        </div>
      </div>
    </>
  );
}

Background.propTypes = {
  number: PropTypes.number.isRequired,
}

export default Background;