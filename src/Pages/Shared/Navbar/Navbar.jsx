import { useState } from 'react';
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from"../../../assets/logo.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-[#009f72] text-white shadow">
            <nav className="p-3 md:flex md:items-center md:justify-between max-w-screen-2xl mx-auto lg:px-24 md:px-4 overflow-x-hidden py-12">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <img src={logo} className='lg:w-96 md:w-80 w-80' alt="" />
                    </Link>

                    <span
                        className="text-3xl cursor-pointer mx-2 md:hidden block"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </span>
                </div>

                <div className={`md:flex md:items-center z-[+1] md:z-auto md:static absolute w-full right-0 md:w-auto md:py-0 py-4 md:pr-7 pr-0 md:opacity-100 ${menuOpen ? 'opacity-100 top-[80px]' : 'opacity-0 top-[-400px]'} transition-all ease-in duration-500`}>
                    <ul className="md:flex md:items-center ml-auto">
                        <li className="mx-4 lg:mx-8 my-3 md:my-0">
                            <Link to="/" className="text-xl font-semibold duration-600">
                                Solutions
                            </Link>
                        </li>
                        <li className="mx-4 lg:mx-8 my-3 md:my-0">
                            <Link to="/colleges" className="text-xl font-semibold duration-600">
                                Projects
                            </Link>
                        </li>
                        <li className="mx-4 lg:mx-8 my-3 md:my-0">
                            <Link to="/admission" className="text-xl font-semibold duration-600">
                                Insights
                            </Link>
                        </li>
                        <li className="mx-4 lg:mx-8 my-3 md:my-0">
                            <Link to="/mycollege" className="text-xl font-semibold duration-600">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="mx-2 my-3 md:my-0">
                            <Link to="/login">
                                <button className="bg-white text-black text-2xl duration-500 p-2 hover:bg-gray-100 rounded-full">
                                    <FaSearch></FaSearch>
                                </button>
                            </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;