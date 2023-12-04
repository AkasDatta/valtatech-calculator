import { CircleSlider } from "react-circle-slider";
import { FaArrowsLeftRight } from "react-icons/fa6";
import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [value, changeValue] = useState(0);

  const handle = (q) => {
    if (q === value) return;
    console.log(q);

    changeValue(q);
  };

  return (
    <div className="bg-[#009f72] text-white">
      <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden py-12 text-center">
        <h2 className="text-2xl mb-12">Average Invoice Processing<br /> Cost ($SGD)</h2>
        <div className="textContainer">
          {value}
          <div className="minute">MINUTES</div>
        </div>

        <div className="border-2 mx-auto w-96 h- p-4 rounded-full circle-slider-container">
          <div className="circle-slider-outer">
            <CircleSlider
              value={value}
              stepSize={100}
              onChange={(value) => handle(value)}
              size={350}
              min={0}
              max={10000}
              progressWidth={2}
              gradientColorFrom="#fff"
              gradientColorTo="#fff"
              knobRadius={20}
              circleWidth={2}
            >
              <FaArrowsLeftRight className="text-2xl text-black" x="24" y="24" />
            </CircleSlider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
