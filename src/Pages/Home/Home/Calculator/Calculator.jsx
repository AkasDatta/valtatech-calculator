
import CircularSlider from "@fseehawer/react-circular-slider";
import "./Calculator.css"; 
import { FaBars } from "react-icons/fa";

const Calculator = () => {
    return (
        <div className="bg-[#009f72] text-white">
            <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden py-12 text-center">
                <h2>Average Invoice Processing Cost ($NZD)</h2>
                <CircularSlider
                    label="savings"
                    min={0}
                    max={100}
                    dataIndex={20}
                    prependToValue="$"
                    appendToValue="K"
                    labelColor="#005a58"
                    labelBottom={true}
                    knobColor="#005a58"
                    knobSize={72}
                    progressColorFrom="#00bfbd"
                    progressColorTo="#005a58"
                    progressSize={24}
                    trackColor="#eeeeee"
                    trackSize={24}
                >
                    <FaBars x='22' y='22' width='28px' height='28px' />
                </CircularSlider>
            </div>
        </div>
    );
};

export default Calculator;
