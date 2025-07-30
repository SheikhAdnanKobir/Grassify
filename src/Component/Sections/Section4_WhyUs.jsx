import React from 'react';
import icone1 from '../../assets/icone4.png';
import icone2 from '../../assets/icone5.png';
import icone3 from '../../assets/icone6.png';

const Section4_WhyUs = () => {
    return (
        <div className='mx-auto my-28'>
            <div className="">
                <h2 className="text-3xl font-semibold text-center mb-5">Why Us</h2>
                <p className="mt-2 text-lg max-w-[700px] text-center  mx-auto">We specialize in delivering durable and innovative fencing solutions built to last. With a focus on quality and trust, we help secure spaces across industries and communities.</p>
            </div>
            <div className='flex flex-col md:flex-row gap-10 justify-center items-center mt-20'>
                <div className='w-[300px] h-[401px] bg-gray-200 relative overflow-hidden rounded-2xl'>
                    <div className='absolute bg-blue-600/50 -top-14 -right-14 blur-3xl h-60 w-60 rounded-full'></div>
                    <div className='relative z-10 p-6'>
                        <img className='w-10 h-14' src={icone1} alt="" />
                        <h3 className="text-xl font-bold mt-4">Unmatched Durability with Corrosion-Free Technology</h3>
                        <p className="mt-2 text-sm">Our JF-270 barbed wire features a robust 270 GSM zinc coating, ensuring superior resistance against rust and corrosion. Paired with stainless steel binding wire, our fencing solutions are designed to withstand harsh environmental conditions, offering longevity and reliability.</p>
                    </div>
                </div>
                <div className='w-[300px] h-[401px] bg-blue-950 relative overflow-hidden rounded-2xl md:-mt-20'>
                    <div className='absolute bg-blue-600/50 -top-14 -right-14 blur-3xl h-60 w-60 rounded-full'></div>
                    <div className='relative z-10 p-6'>
                        <img className='w-10 h-12' src={icone2} alt="" />
                        <h3 className="text-xl font-bold mt-4 text-white">Customer-Centric Approach</h3>
                        <p className="mt-2 text-sm text-white">At JF Products, customer satisfaction is paramount. We pride ourselves on delivering timely services, maintaining transparent communication, and ensuring a seamless purchasing experience. Our commitment to excellence is reflected in the positive feedback from our valued clients.</p>
                    </div>
                </div>
                <div className='w-[300px] h-[401px] bg-gray-200 relative overflow-hidden rounded-2xl'>
                    <div className='absolute bg-blue-600/50 -top-14 -right-14 blur-3xl h-60 w-60 rounded-full'></div>
                    <div className='relative z-10 p-6'>
                        <img className='w-10 h-12' src={icone3} alt="" />
                        <h3 className="text-xl font-bold mt-4">Innovative and Diverse Product Range</h3>
                        <p className="mt-2 text-sm">We offer a wide array of fencing solutions, including Polyhex Mesh, Australian Trellis, and GI Poultry Mesh, catering to various needs from agricultural to residential applications. Our products combine functionality with aesthetic appeal, ensuring both security and style.</p>
                    </div>
                </div>
            </div>
            <div className='mx-auto text-center my-10 '>
                <button>
                    <a href="#" className="bg-lime-500  px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300">Contact us</a>
                </button>
            </div>
        </div>
    );
};

export default Section4_WhyUs;