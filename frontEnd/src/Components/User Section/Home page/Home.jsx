import React from 'react';

const Home = () => {
    return (

        <div className="bg-pink-700">
            <section className="relative">
                <div id="controls-carousel" className="relative w-full" data-carousel="static">
                    <div className="relative h-screen bg-black overflow-hidden rounded-lg">
                        {/* Header Section */}
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
                                        <a href="#" className="text-lg text-white hover:text-gray-300 transition">
                                            Features
                                        </a>
                                        <a href="#" className="text-lg text-white hover:text-gray-300 transition">
                                            Solutions
                                        </a>
                                        <a href="#" className="text-lg text-white hover:text-gray-300 transition">
                                            Resources
                                        </a>
                                        <a href="#" className="text-lg text-white hover:text-gray-300 transition">
                                            Pricing
                                        </a>
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
                                            Apply for free
                                        </a>
                                    </div>

                                    {/* Mobile Menu Toggle */}
                                    <button
                                        type="button"
                                        className="inline-flex p-2 text-white rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-white"
                                    >
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16m-7 6h7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </header>

                        {/* Text Section */}
                        <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-10 lg:px-16">
                            <div>
                                <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
                                    Welcome to Our Platform
                                </h1>
                                <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
                                    Discover amazing features and solutions tailored just for you. Start your journey with us today!
                                </p>
                            </div>
                        </div>

                        {/* Carousel Images */}
                        <div className="absolute inset-0 z-0">
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img
                                    src="/docs/images/carousel/carousel-1.svg"
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="Slide 1"
                                />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                                <img
                                    src="/docs/images/carousel/carousel-2.svg"
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="Slide 2"
                                />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <img
                                    src="/docs/images/carousel/carousel-3.svg"
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="Slide 3"
                                />
                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <button
                            type="button"
                            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
                            data-carousel-prev
                        >
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 hover:bg-white/50 rounded-full">
                        <svg
                            className="w-4 h-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                        </button>
                        <button
                            type="button"
                            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
                            data-carousel-next
                        >
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 hover:bg-white/50 rounded-full">
                        <svg
                            className="w-4 h-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                        </button>
                    </div>
                </div>
            </section>
        </div>



    );
};

export default Home;