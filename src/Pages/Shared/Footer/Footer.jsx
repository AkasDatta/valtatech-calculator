import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#1E1E1E] text-white">
            <footer className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden pb-12 pt-20">
                <div className="">
                    <div className="lg:flex lg:items-start">

                    <div
                        className="grid grid-cols-12 gap-2 xl:gap-16 lg:gap-12  md:gap-4 lg:mt-0 lg:gap-y-16 text-2xl"
                    >
                        <div className="mt-8 border-t border-gray-300 pt-8 col-span-12 md:col-span-12 lg:col-span-3">
                            <p className="font-bold text-gray-400">Explore</p>

                            <ul className="mt-6 space-y-4 text-lg">
                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Home
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Projects
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Insights
                                </a>
                                </li>

                            </ul>
                        </div>

                        <div className="mt-8 border-t border-gray-300 pt-8 col-span-12 md:col-span-12 lg:col-span-6">
                            <p className="font-bold text-gray-400">Solutions</p>

                            <ul className="mt-6 space-y-4 text-lg">
                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Purchasing & Accounts Payable Automation
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Accounts Receivable Automation
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Microsoft Power Platform
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Enterprise Content Services
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Intelligent Automation & Robotic Process Automation
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Order Management Automation
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Document Generation & Digital Signing
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Contract Analytics & Lifecycle Management
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Business Process Outsourcing & Digitisation
                                </a>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8 border-t border-gray-300 pt-8 col-span-12 md:col-span-12 lg:col-span-3">
                            <p className="font-bold text-gray-400">Contact</p>

                            <ul className="mt-6 space-y-4 text-lg">
                                <li>
                                <a href="#" className="text-gray-300">
                                    +64 9 356 4200
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-gray-300 transition hover:text-[#068A66]">
                                    Email us
                                </a>
                                </li>

                                <li>
                                <p className="text-gray-300">
                                Address: <br />
                                1-5 Nugent Street <br />
                                Grafton <br />
                                Auckland 1023 <br />
                                New Zealand
                                </p>
                                </li>
                                
                                <li>
                                    <a href="#" className="text-gray-300 transition hover:text-[#068A66]">Google Map</a>
                                </li>

                                <div className="flex gap-6 lg:gap-1 xl:gap-6 ">
                                    <li>
                                        <button className="bg-gray-700 text-white text-2xl duration-500 p-3 lg:text-xl lg:p-2 xl:p-3 xl:text-2xl hover:bg-gray-300 hover:text-black rounded-full">
                                            <FaFacebookF></FaFacebookF>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="bg-gray-700 text-white text-2xl duration-500 p-3 lg:text-xl lg:p-2 xl:p-3 xl:text-2xl hover:bg-gray-300 hover:text-black  rounded-full">
                                            <FaTwitter></FaTwitter>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="bg-gray-700 text-white text-2xl duration-500 p-3 lg:text-xl lg:p-2 xl:p-3 xl:text-2xl hover:bg-gray-300 hover:text-black  rounded-full">
                                            <FaYoutube></FaYoutube>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="bg-gray-700 text-white text-2xl duration-500 p-3 lg:text-xl lg:p-2 xl:p-3 xl:text-2xl hover:bg-gray-300 hover:text-black  rounded-full">
                                            <FaLinkedin></FaLinkedin>
                                        </button>
                                    </li>
                                </div>

                            </ul>
                        </div>
                    </div>
                    </div>

                    <div className="mt-8 border-t border-gray-300 pt-8">
                    <div className="lg:flex sm:justify-between">
                        <p className="text-xs text-gray-400 mb-4">
                        &copy; VALTATECH Business Innovation New Zealand Limited.
                        </p>

                        <ul
                        className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end"
                        >
                            <li>
                                <a href="#" className="text-gray-400 transition hover:text-[#068A66]">
                                Privacy Policy
                                </a>
                            </li>
                            <li>
                                |
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 transition hover:text-[#068A66]">
                                Terms of Use
                                </a>
                            </li>
                            <li>
                                |
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 transition hover:text-[#068A66]">
                                Social Media
                                </a>
                            </li>
                            <li>
                                |
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 transition hover:text-[#068A66]">
                                Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
        </div>

        
    );
};

export default Footer;