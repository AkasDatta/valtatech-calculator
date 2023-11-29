import { FaFacebook } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#1E1E1E] text-white">
            <footer className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden pb-12 pt-20">
                <div className="">
                    <div className="lg:flex lg:items-start lg:gap-8">

                    <div
                        className="grid lg:grid-cols-6 gap-8 lg:mt-0 lg:gap-y-16 text-2xl"
                    >
                        <div className="mt-8 border-t border-gray-300 pt-8 col-span-1">
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

                        <div className="mt-8 border-t border-gray-300 pt-8 col-start-2 col-span-4">
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

                        <div className="mt-8 border-t border-gray-300 pt-8 col-span-1">
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

                                <li>
                                    <button className="bg-white text-black text-2xl duration-500 p-2 hover:bg-gray-100 rounded-full">
                                        <FaFacebook></FaFacebook>
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>
                    </div>

                    <div className="mt-8 border-t border-gray-300 pt-8">
                    <div className="sm:flex sm:justify-between">
                        <p className="text-xs text-gray-400">
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