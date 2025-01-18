import React from 'react';
import Card from "./Card/Card.jsx";
import sliderImage1 from '../../../../assets/luxury-bedroom-hotel.jpg';
import sliderImage2 from '../../../../assets/CentralBackpackers7.jpg';
import sliderImage3 from '../../../../assets/swimming-pool.jpg';
const Rooms = () => {
    return (
        <div>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Select Your Room</h2>
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">Choose your perfect room and unwind in comfort. Experience serene spaces with stunning views, designed for relaxation and tranquility. Escape the ordinary and embrace a peaceful
                                retreat.</p>
                        </div>
                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        <Card src={sliderImage1} price="USD 20" title="Lorem ipsum dolor sit amet." description="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis delectus eaque est excepturi iusto maxime necessitatibus possimus, sit sunt voluptate." link=""/>
                        <Card src={sliderImage2} price="USD 10" title="Lorem ipsum dolor sit amet." description="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis delectus eaque est excepturi iusto maxime necessitatibus possimus, sit sunt voluptate." link=""/>
                        <Card src={sliderImage3} price="USD 30" title="Lorem ipsum dolor sit amet." description="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis delectus eaque est excepturi iusto maxime necessitatibus possimus, sit sunt voluptate." link=""/>

                    </div>

                    <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
                        <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Rooms;