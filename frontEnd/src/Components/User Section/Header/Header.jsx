import React from 'react';
import MenuLinks from "../../Menu Links/MenuLinks.jsx";

const Header = () => {
    return (
        <header className="absolute inset-x-0 top-0 z-10 w-full">
            <div className="px-6 mx-auto sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" title="Logo" className="flex items-center">
                            <img
                                className="w-auto h-10"
                                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/logo.svg"
                                alt="Logo"
                            />
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden lg:flex lg:items-center lg:space-x-12">
                        <div className="text-lg text-white hover:text-gray-300 transition">
                            <MenuLinks src="/home" text="Home"/>
                        </div>
                        <div className="text-lg text-white hover:text-gray-300 transition">
                            <MenuLinks src="/gallery" text="Gallery"/>
                        </div>
                        <div className="text-lg text-white hover:text-gray-300 transition">
                            <MenuLinks src="/rooms" text="Rooms"/>
                        </div>
                        <div className="text-lg text-white hover:text-gray-300 transition">
                            <MenuLinks src="/tours" text="Tours"/>
                        </div>


                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4 lg:space-x-8">
                        <a href="#" className="hidden lg:block text-lg text-white hover:text-gray-300 transition">
                            Log in
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2.5 text-sm lg:text-base font-semibold text-white bg-white/20 hover:bg-white/40 rounded-lg transition"
                        >
                            Check Availability
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;