import React from 'react';
import icone1 from '../../Assets/icone1.png';
import icone2 from '../../Assets/icone2.png';
import icone3 from '../../Assets/icone3.png';

const Section3_TrustedCustomers = () => {
    return (
        <div className='my-28 py-20 bg-blue-950 relative to-transparent p-8  overflow-hidden rounded-lg shadow-lg'>
            <div className='absolute  bg-blue-800/60 z-0 w-96 h-96 rounded-full mx-auto inset-0 top-32 blur-3xl  to-transparent'>

            </div>
            <h2 className="text-3xl text-white font-semibold text-center relative z-50 mb-10">Trusted by over 6K+ customers</h2>
            <div className="relative mt-6 z-50 flex flex-col md:flex-row md:justify-evenly mx-auto">
                <div className='flex gap-5 items-center mb-6 md:mb-0'>
                    <img className='w-12 h-12' src={icone1} alt="Customer 1" />
                    <div>
                        <h3 className="text-lg text-white font-bold">Premium</h3>
                        <p className="text-sm text-gray-300">Products</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center mb-6 md:mb-0'>
                    <img className='w-12 h-12' src={icone2} alt="Customer 2" />
                    <div>
                        <h3 className="text-lg text-white font-bold">4000+</h3>
                        <p className="text-sm text-gray-300">"Google Review</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center mb-6 md:mb-0'>
                    <img className='w-12 h-12' src={icone3} alt="Customer 3" />
                    <div>
                        <h3 className="text-lg text-white font-bold">Delivery</h3>
                        <p className="text-sm text-gray-300">Across India</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3_TrustedCustomers;