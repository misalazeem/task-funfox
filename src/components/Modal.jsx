import PropTypes from "prop-types";
import Paragraph2 from "./Paragraph/Paragraph2";
import Input from "./Input/Input";
import Button from "./Button/Button";
import CloseButton from "/images/close.png";
import Clock from "/images/clock.png";
import HomeImage from "/images/home.png";

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-70 bg-[#6C5D4A] backdrop-filter backdrop-blur-lg">
          <div className="fixed w-[90%] h-[90%]">
            <div className="bg-[#111111] bg-opacity-20 w-full h-full border-white border-4 rounded-lg shadow-md p-6 overflow-auto">
              <div className="flex flex-col items-center h-full py-8 rounded-lg">
                <button onClick={onClose}><img src={CloseButton} className="absolute right-[10px] top-[10px]"/></button>
                <h2 className="2xl:text-[4rem] lg:text-[2.5rem] md:text-xl sm:text-lg">Guide Sheet</h2>
                <div className="flex flex-col w-[100%] pt-[10%]">
                  <p className="my-4 px-4 lg:text-lg md:text-sm">So, what do you think the definition of setting is?</p>
                  <div className="flex flex-row w-[100%] items-center">
                    <Paragraph2 text="Any guesses?" />
                    <Input bgColor="#fff" placeholder="> Setting is the time and place of a story."/>
                    <Paragraph2 text="Hint: " />
                    <div className="flex-grow">
                      <div className="flex flex-row justify-between">
                        <Button image={Clock}/>
                        <Button image={HomeImage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Modal;
