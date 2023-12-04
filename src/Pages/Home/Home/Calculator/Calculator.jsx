import {CircleSlider} from "react-circle-slider";
import "./Calculator.css"; 
// import { FaArrowsLeftRight } from "react-icons/fa6";
import { useState } from "react";

const Calculator = () => { 
    const [value, changeValue] = useState(20);

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

                <div className="border-2 mx-auto w-80 h-80 p-4 rounded-full">
                    
                    {/* <CircularSlider
                        label="savings"
                        // min={0}
                        max={10000}
                        // dataIndex={0}
                        // prependToValue="$"
                        // stepSize={100}
                        // appendToValue="K"
                        labelColor="#fff"
                        labelBottom={true}
                        knobColor="#eeeeee"
                        knobSize={72}
                        progressColorFrom="#fff"
                        progressColorTo="#fff"
                        progressSize={5}
                        trackColor="#eeeeee"
                        trackSize={5}
                        width={280}
                        value={value}
                        stepSize={5}
                        onChange={(value) => handle(value)}
                    >
                         <div
                            >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eveniet! Explicabo impedit quis id perspiciatis consequatur rem obcaecati sequi labore, ad est expedita!
                            </div>
                        <FaArrowsLeftRight className="text-2xl text-black" x='24' y='24'/>
                    </CircularSlider> */}
                  
50

                    <CircleSlider
                        value={value}
                        stepSize={100}
                        onChange={(value) => handle(value)}
                        size={250}
                        max={10000}
                        gradientColorFrom="#ec008c"
                        gradientColorTo="#fc6767"
                        knobRadius={20}
                        circleWidth={20}
                    />
                </div>
            </div>
        </div>
    );
};

export default Calculator;
