

const Footer = () => {
    return (
        <div className="bg-[#1E1E1E] text-white">
            <footer className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden pb-12 pt-20">
                <div className="">
                    <div className="lg:flex lg:items-start lg:gap-8">

                    <div
                        className="grid grid-cols-3 gap-8 lg:mt-0 lg:grid-cols-3 lg:gap-y-16"
                    >
                        <div className="mt-8 border-t border-gray-300 pt-8">
                            <p className="font-bold text-gray-400">Explore</p>

                            <ul className="mt-6 space-y-4 text-sm">
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

                        <div className="mt-8 border-t border-gray-300 pt-8">
                            <p className="font-bold text-gray-400">Solutions</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Purchasing & Accounts Payable Automation
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Accounts Receivable Automation
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Microsoft Power Platform
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-70">
                                    Enterprise Content Services
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-70">
                                    Intelligent Automation & Robotic Process Automation
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-70">
                                    Order Management Automation
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-70">
                                    Document Generation & Digital Signing
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-70">
                                    Contract Analytics & Lifecycle Management
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-70">
                                    Business Process Outsourcing & Digitisation
                                </a>
                                </li>
                            </ul>
                        </div>

                        <div className="">
                            <p className="font-bold text-gray-400">About CampusGo University Website</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <p className="text-gray-600">
                                    CampusGo is a comprehensive university website providing easy access to academic resources and campus information for students and faculty.</p>
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