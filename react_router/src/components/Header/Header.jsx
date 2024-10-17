import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [navBar, setNavBar] = useState(false);

    const toggleMenu = () => {
        setNavBar(!navBar);
    };

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" className="lg:mr-3 h-10" alt="Logo" />
                    </Link>
                    <div className="flex items-center order-2 md:order-2 lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-5 py-2 lg:py-2.5 mr-1 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs md:text-sm px-2 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div className="order-first md:hidden">
                        <button onClick={toggleMenu} className="text-gray-800 hover:bg-gray-50 focus:outline-none">
                            {navBar ? (<i className="fa-solid fa-times text-xl"></i>) : (<i className="fa-solid fa-bars text-xl"></i>)}
                        </button>
                    </div>
                    <div className={`${navBar ? 'block' : 'hidden'} order-3 justify-between items-center w-full md:flex md:w-auto md:order-1 lg:flex lg:w-auto lg:order-1`}>
                        <ul className="flex flex-col md:flex-row font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? 'text-orange-700' : 'text-gray-700'} duration-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? 'text-orange-700' : 'text-gray-700'} duration-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? 'text-orange-700' : 'text-gray-700'} duration-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 ${isActive ? 'text-orange-700' : 'text-gray-700'} duration-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
