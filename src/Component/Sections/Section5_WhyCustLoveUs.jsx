import React from 'react';
import icone1 from '../../assets/icone7.png';
import icone2 from '../../assets/bgImg2.jpg';
import img from '../../assets/Images.jpg';
import { LiaArrowAltCircleLeft, LiaArrowAltCircleRight } from 'react-icons/lia';

const Section5_WhyCustLoveUs = () => {
    return (
        <div className='mx-auto mt-28 mb-[560px] md:mb-28 relative'>
            <h2 className="text-3xl font-bold text-center">Why Customers Love Us?</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-10  h-[468px]'>
                <div className='col-span-3 relative bg-gray-100 rounded-2xl p-10 h-[468px]' >
                    <img className='h-14 w-14 my-10' src={icone1} alt="" />
                    <p className='reletive text-lg font-semibold'>
                        I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product
                    </p>

                    <div className='absolute bottom-0 left-0 right-0  rounded-lg'>
                        <div className=' p-5 relative mx-auto'>
                            <img className='h-24 w-full rounded-xl' src={icone2} alt="" />
                        </div>
                        <div className='flex justify-between items-center top-14 px-10 absolute w-full text-center'>
                            <h3 className='text-2xl font-semibold'>- Samuel Varughese</h3>
                            <div className=' flex items-center gap-2'>
                                <LiaArrowAltCircleLeft className='h-10 w-10 bg-white hover:text-lime-500 rounded-full'></LiaArrowAltCircleLeft>
                                <LiaArrowAltCircleRight className='h-10 w-10 bg-white hover:text-lime-500 rounded-full'></LiaArrowAltCircleRight>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1   h-[468px]'>
                    <img className='h-full w-full' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Section5_WhyCustLoveUs;