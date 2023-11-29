import drug from "../../../../assets/efficiency.png";
import calculator from "../../../../assets/calculator.png";
import network from "../../../../assets/network.png";
import './Banner.css'; // Import your CSS file
import { useState } from "react";
import { FaAnglesDown } from "react-icons/fa6";

const Banner = () => {
    const [isHovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!isHovered);
    };

    return (
        <div className="bg-[#009f72] text-white">
            <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden pt-12">
                <h2 className="text-6xl font-bold">Invoice Savings Calculator</h2>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 pt-8 text-xl font-semibold gap-8">
                    <div className="relative group">
                        <p className='mx-8'>
                            I wonder how much I could save using an automated Accounts Payable system?
                        </p>
                        <p className="my-3 mx-8">- Almost every single CFO, New Zealand Businesses</p>
                        <div className="hoverLine"></div>
                    </div>
                    <div className="md:my-4 sm:my-4 lg:my-0">
                        <p>
                            Our handy interactive invoice calculator shows you just how much money you
                            could be saving by automating your Accounts Payable. Spoiler … it’s a lot.
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-20 my-16'>
                    <div className="xl:flex rounded-xl bg-white text-black shadow-2xl">
                        <div>
                        <figure><img src={drug} className="w-14 mx-8 mt-8 xl:mx-12" alt="drug"/></figure>
                        </div>
                        <div className="card-body">
                            <h2 className="font-semibold text-3xl text-[#007957]">Step 1</h2>
                            <p className="text-xl">Drag the pointer to match your monthly invoice count.</p>
                        </div>
                    </div>
                    <div className="xl:flex rounded-xl bg-white text-black shadow-2xl">
                        <div>
                        <figure><img src={calculator} className="w-14 mx-8 mt-8 xl:mx-12" alt="drug"/></figure>
                        </div>
                        <div className="card-body">
                            <h2 className="font-semibold text-3xl text-[#007957]">Step 2</h2>
                            <p className="text-xl">Use our calculated manual invoice cost or enter your own.</p>
                        </div>
                    </div>
                    <div className="xl:flex rounded-xl bg-white text-black shadow-2xl">
                        <div>
                        <figure><img src={network} className="w-14 mx-8 mt-8 xl:mx-12" alt="drug"/></figure>
                        </div>
                        <div className="card-body">
                            <h2 className="font-semibold text-3xl text-[#007957]">Step 3</h2>
                            <p className="text-xl">Marvel at the cost savings and get in touch to get started.</p>
                        </div>
                    </div>
                </div>

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

export default Banner;
