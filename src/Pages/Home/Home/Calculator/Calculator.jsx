import CircularSlider from "@fseehawer/react-circular-slider";
import "./Calculator.css"; 
import { FaArrowsLeftRight } from "react-icons/fa6";

const Calculator = () => {
    return (
        <div className="bg-[#009f72] text-white">
            <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden py-12 text-center">
                <h2 className="text-2xl mb-12">Average Invoice Processing<br /> Cost ($SGD)</h2>
                <CircularSlider
                    label="savings"
                    min={0}
                    max={10000}
                    dataIndex={0}
                    prependToValue="$"
                    appendToValue="K"
                    labelColor="#fff"
                    labelBottom={true}
                    knobColor="#eeeeee"
                    knobSize={72}
                    progressColorFrom="#fff"
                    progressColorTo="#fff"
                    progressSize={5}
                    trackColor="#eeeeee"
                    trackSize={5}
                >
                    <FaArrowsLeftRight className="text-2xl text-black" x='24' y='24' width='32px' height='32px' />
                </CircularSlider>
            </div>
        </div>
    );
};

export default Calculator;
