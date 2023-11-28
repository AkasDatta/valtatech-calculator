import { FaAnglesDown } from "react-icons/fa6";
import "./Calculator.css"; 
import { useState } from "react";

const Calculator = () => {
    const [isHovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!isHovered);
    };

    return (
        <div className="bg-[#009f72] text-white">
            <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden pb-12">
                <div className="text-center">
                    <div
                        className={`icon-container ${isHovered ? 'hovered' : ''}`}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                    >
                        <FaAnglesDown className="text-6xl text-[#0B6550] icon"></FaAnglesDown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
