import React, { useState } from 'react';
import sliderImage1 from '../../../assets/luxury-bedroom-hotel.jpg';
import sliderImage2 from '../../../assets/CentralBackpackers7.jpg';

const Home = () => {
    const slides = [sliderImage1, sliderImage2, sliderImage1]; // Array of slide images
    const [activeIndex, setActiveIndex] = useState(0); // Track the active slide

    // Function to handle the "Next" button
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Function to handle the "Previous" button
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="bg-pink-700">
            <section className="relative">
                <div id="controls-carousel" className="relative w-full">
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
                                </div>
                            </div>
                        </header>

                        {/* Text Section */}
                        <div className="absolute inset-0 opacity-100 flex items-center justify-center text-center px-6 sm:px-10 lg:px-16">
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

                            {slides.map((slide, index) => (
                                <img
                                    key={index}
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                    className={`absolute block w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                                        index === activeIndex ? 'opacity-30' : 'opacity-0'
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Carousel Controls */}
                        <button
                            type="button"
                            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
                            onClick={handlePrev}
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
                            onClick={handleNext}
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
