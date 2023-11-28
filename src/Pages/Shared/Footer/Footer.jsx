

const Footer = () => {
    return (
        <div className="bg-[#1E1E1E] text-white">
            <footer className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden pb-12">
                <div className="">
                    <div className="lg:flex lg:items-start lg:gap-8">

                    <div
                        className="grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16"
                    >
                        <div className="col-span-1 sm:col-span-1">
                            <p className="font-bold text-gray-900">Explore</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Home
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Colleges
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Admission
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    My College
                                </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1 sm:col-span-1">
                            <p className="font-bold text-gray-900">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Become a Teacher
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Privacy Policy
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Blog
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-70">
                                    Our Teachers
                                </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1 sm:col-span-1">
                            <p className="font-bold text-gray-900">About CampusGo University Website</p>

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