import React from 'react';
import { LiaArrowAltCircleLeftSolid, LiaArrowAltCircleRight } from "react-icons/lia";

const SliderProduct = ({
    heading, img1, img2, img3, img4, 
    PdName1, PdName2, PdName3, PdName4, 
    PdPrice1, PdPrice2, PdPrice3, PdPrice4
    }) => {

    return (
        <div className='my-8'>
            <div className="mb-8">
                <h2 className="text-3xl font-semibold mt-8">{heading}</h2>
            </div>
            {/* Slider */}
            <div data-hs-carousel='{
                "loadingClasses": "opacity-0",
                "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
                "slidesQty": {
                    "xs": 1,
                    "lg": 4
                }
                }' className="relative">
                <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
                    <div className="relative min-h-80 -mx-1">
                        {/* transition-transform duration-700 */}
                        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 transition-transform duration-700 gap-2">
                            <div className="hs-carousel-slide">
                                <div className="flex flex-col bg-gray-100 border h-full border-gray-200 shadow-2xs rounded-xl">
                                    <div className='overflow-hidden w-full h-full p-2  rounded-xl'>
                                        <img className="w-full h-full rounded-2xl" src={img1} alt="Product" />
                                    </div>
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {PdName1}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600">
                                            {PdPrice1}
                                        </p>
                                        <a className="bg-lime-500  px-4 py-2 mt-3 inline-block rounded-full hover:bg-lime-600 font-medium transition-colors duration-300" href="#">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex flex-col bg-gray-100 border h-full border-gray-200 shadow-2xs rounded-xl">
                                    <div className='overflow-hidden w-full h-full p-2  rounded-xl'>
                                        <img className="w-full h-full rounded-2xl" src={img2} alt="Product" />
                                    </div>
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {PdName2}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600">
                                            {PdPrice2}
                                        </p>
                                        <a className="bg-lime-500  px-4 py-2 mt-3 inline-block rounded-full hover:bg-lime-600 font-medium transition-colors duration-300" href="#">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex flex-col bg-gray-100 border h-full border-gray-200 shadow-2xs rounded-xl">
                                    <div className='overflow-hidden w-full h-full p-2  rounded-xl'>
                                        <img className="w-full h-full rounded-2xl" src={img3} alt="Product" />
                                    </div>
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {PdName3}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600">
                                            {PdPrice3}
                                        </p>
                                        <a className="bg-lime-500  px-4 py-2 mt-3 inline-block rounded-full hover:bg-lime-600 font-medium transition-colors duration-300" href="#">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex flex-col bg-gray-100 border h-full border-gray-200 shadow-2xs rounded-xl">
                                    <div className='overflow-hidden w-full h-full p-2  rounded-xl'>
                                        <img className="w-full h-full rounded-2xl" src={img4} alt="Product" />
                                    </div>
                                    <div className="p-4 md:p-5">
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {PdName4}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600">
                                            {PdPrice4}
                                        </p>
                                        <a className="bg-lime-500  px-4 py-2 mt-3 inline-block rounded-full hover:bg-lime-600 font-medium transition-colors duration-300" href="#">
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="hs-carousel-prev  absolute bg-white cursor-pointer rounded-full top-32 -start-5 ">
                    <span className="text-2xl" aria-hidden="true">
                        <LiaArrowAltCircleLeftSolid className='text-4xl hover:text-lime-500 rounded-full' />
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button type="button" className="hs-carousel-next bg-white cursor-pointer rounded-full absolute top-32 -end-5 ">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <LiaArrowAltCircleRight className='text-4xl hover:text-lime-500 rounded-full' />
                    </span>
                </button>
            </div>
            {/* End Slider */}
        </div>
    );
};

export default SliderProduct;