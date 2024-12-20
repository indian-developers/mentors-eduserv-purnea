import React from 'react';
import logo from "../assets/logo.jpg";
const Footer = () => {
    return (
        <footer className="rounded-lg shadow bg-gray-100 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 flex flex-col">
                <div className="flex flex-col justify-center items-center">
                    <a
                        href="https://www.mentorsedupurnea.com"
                        className="flex items-center mb-4 space-x-3 rtl:space-x-reverse"
                    >
                        <img src={logo} alt="" className="w-32 rounded" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center mt-4">
                    © 2024{' '}
                    <a href="https://www.mentorsedupurnea.in" className="hover:underline">
                        Mentors Eduserv Purnea
                    </a>
                    &nbsp; | NH-31, opposite Station Club Durga Mandir, near Panchmukhi Mandir, Navratan Hatta, Purnia, Bihar 854301
                </span>
            </div>
        </footer>
    );
};

export default Footer;
