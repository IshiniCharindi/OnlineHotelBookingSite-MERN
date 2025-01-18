import React from 'react';
import Card from "../Rooms/Card/Card.jsx";
import forest from '../../../../assets/forest.jpg'
import './Tours.css'

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
                        <div className=" overflow-hidden border-2 border-gray-100 rounded-md" id="tourContainer1">

                            <div className="p-8 xl:px-12">
                                <h3 className="text-base font-semibold text-purple-600">Exclusive</h3>
                                <p className="text-5xl font-bold text-black mt-7">$79</p>
                                <p className="mt-3 text-base text-gray-600">One-time payment</p>


                                <p className="mt-4 text-sm text-gray-500">14 Days Moneyback Guarantee</p>
                            </div>
                        </div>
                        <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md shadow-2xl" id="tourContainer2">
                            <div className="p-8 xl:px-12">
                                <h3 className="text-base font-semibold text-purple-600">Professional</h3>
                                <p className="text-5xl font-bold text-black mt-7">$49</p>
                                <p className="mt-3 text-base text-gray-600">One-time payment</p>

                                <p className="mt-4 text-sm text-gray-500">14 Days Moneyback Guarantee</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-white border-2 border-gray-100 rounded-md" id="tourContainer3">
                            <div className="p-8 xl:px-12">
                                <h3 className="text-base font-semibold text-purple-600">Exclusive</h3>
                                <p className="text-5xl font-bold text-black mt-7">$79</p>
                                <p className="mt-3 text-base text-gray-600">One-time payment</p>

                                <p class="mt-4 text-sm text-gray-500">14 Days Moneyback Guarantee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Tours;