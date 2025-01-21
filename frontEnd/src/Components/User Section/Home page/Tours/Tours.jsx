import React from 'react';
import Card from "../Rooms/Card/Card.jsx";
import forest from '../../../../assets/forest.jpg'
import './Tours.css'
import MenuLinks from "../../../Menu Links/MenuLinks.jsx";
import {Link} from "react-router-dom";

const Tours = () => {
    return (
        <div>
            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Unforgettable Experience </h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-3">
                        <div className="h-96 overflow-hidden border-2 border-gray-100 rounded-md" id="tourContainer1">

                            <div className="p-8 xl:px-12 ">
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white">USD 10 </span>
                                </div>
                                <p className="text-4xl font-bold text-white mt-10">Lorem ipsum</p>
                                <p className="mt-7 text-base text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio, exercitationem facere fugit ipsum minima quibusdam quidem voluptas voluptates.</p>


                                <div className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-orange-200 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                    <Link to="">Discover Trip</Link>
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-white border-4 border-black rounded-md shadow-2xl" id="tourContainer2">
                            <div className="p-8 xl:px-12">
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white">USD 10 </span>
                                </div>
                                <p className="text-4xl font-bold text-white mt-10">Lorem ipsum</p>
                                <p className="mt-7 text-base text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio, exercitationem facere fugit ipsum minima quibusdam quidem voluptas voluptates.</p>


                                <div className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-orange-200 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                    <Link to="">Discover Trip</Link>
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md" id="tourContainer3">
                            <div className="p-8 xl:px-12">
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white">USD 10 </span>
                                </div>
                                <p className="text-4xl font-bold text-white mt-10">Lorem ipsum</p>
                                <p className="mt-7 text-base text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda distinctio, exercitationem facere fugit ipsum minima quibusdam quidem voluptas voluptates.</p>


                                <div className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-orange-200 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                                    <Link to="">Discover Trip</Link>
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Tours;