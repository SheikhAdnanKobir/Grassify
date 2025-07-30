import React from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import { LiaArrowAltCircleLeftSolid, LiaArrowAltCircleRight } from 'react-icons/lia';

const Banner = () => {
    return (
        <div>
            {/* Slider */}
            <div data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
  "isCentered": true,
  "slidesQty": {
    "xs": 1,
    "lg": 1.5
  }
}' className="relative">
                <div className="hs-carousel w-full overflow-hidden bg-white rounded-lg">
                    <div className="relative min-h-96 -mx-1">
                        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                            <div className="hs-carousel-slide px-1">
                                <div className="flex justify-center items-center gap-5 bg-gray-200 p-6">
                                    <div className='w-1/2 p-2 rounded-2xl '>
                                        <img className='h-96 pb-14 rounded-2xl' src={banner1} alt="" />
                                    </div>
                                    <div className='w-1/2 flex flex-col justify-center gap-4 '>
                                        <h1 className='text-3xl font-bold'>JF Privezy Grass Wall</h1>
                                        <p>The perfact Blend of Greenery</p>
                                        <button className='bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 w-32 rounded-full'>
                                            Shop Now
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex justify-center items-center gap-5 bg-gray-200 p-6">
                                    <div className='w-1/2 p-2 rounded-2xl '>
                                        <img className='h-96 pb-14 rounded-2xl' src={banner2} alt="" />
                                    </div>
                                    <div className='w-1/2 flex flex-col justify-center gap-4 '>
                                        <h1 className='text-3xl font-bold'>JF Privezy Grass Wall</h1>
                                        <p>The perfact Blend of Greenery</p>
                                        <button className='bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 w-32 rounded-full'>
                                            Shop Now
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex justify-center items-center gap-5 bg-gray-200 p-6">
                                    <div className='w-1/2 p-2 rounded-2xl '>
                                        <img className='h-96 pb-14 rounded-2xl' src={banner3} alt="" />
                                    </div>
                                    <div className='w-1/2 flex flex-col justify-center gap-4 '>
                                        <h1 className='text-3xl font-bold'>JF Privezy Grass Wall</h1>
                                        <p>The perfact Blend of Greenery</p>
                                        <button className='bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 w-32 rounded-full'>
                                            Shop Now
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex justify-center items-center gap-5 bg-gray-200 p-6">
                                    <div className='w-1/2 p-2 rounded-2xl '>
                                        <img className='h-96 pb-14 rounded-2xl' src={banner1} alt="" />
                                    </div>
                                    <div className='w-1/2 flex flex-col justify-center gap-4 '>
                                        <h1 className='text-3xl font-bold'>JF Privezy Grass Wall</h1>
                                        <p>The perfact Blend of Greenery</p>
                                        <button className='bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 w-32 rounded-full'>
                                            Shop Now
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                               <div className="flex justify-center items-center gap-5 bg-gray-200 p-6">
                                    <div className='w-1/2 p-2 rounded-2xl '>
                                        <img className='h-96 pb-14 rounded-2xl' src={banner2} alt="" />
                                    </div>
                                    <div className='w-1/2 flex flex-col justify-center gap-4 '>
                                        <h1 className='text-3xl font-bold'>JF Privezy Grass Wall</h1>
                                        <p>The perfact Blend of Greenery</p>
                                        <button className='bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 w-32 rounded-full'>
                                            Shop Now
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="hs-carousel-slide px-1">
                                <div className="flex justify-center items-center gap-5 bg-gray-200 p-6">
                                    <div className='w-1/2 p-2 rounded-2xl '>
                                        <img className='h-96 pb-14 rounded-2xl' src={banner3} alt="" />
                                    </div>
                                    <div className='w-1/2 flex flex-col justify-center gap-4 '>
                                        <h1 className='text-3xl font-bold'>JF Privezy Grass Wall</h1>
                                        <p>The perfact Blend of Greenery</p>
                                        <button className='bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 w-32 rounded-full'>
                                            Shop Now
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="hs-carousel-prev  absolute bg-white cursor-pointer rounded-full top-44 -start-5 ">
                    <span className="text-2xl" aria-hidden="true">
                        <LiaArrowAltCircleLeftSolid className='text-4xl bg-lime-500 hover:text-lime-700 rounded-full' />
                    </span>
                    <span className="sr-only">Previous</span>
                </button>
                <button type="button" className="hs-carousel-next bg-white cursor-pointer rounded-full absolute top-44 -end-5 ">
                    <span className="sr-only">Next</span>
                    <span className="text-2xl" aria-hidden="true">
                        <LiaArrowAltCircleRight className='text-4xl bg-lime-500 hover:text-lime-700 rounded-full' />
                    </span>
                </button>

            </div>
            {/* End Slider */}

        </div>
    );
};

export default Banner;