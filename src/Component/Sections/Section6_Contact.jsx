import React from 'react';
import location1 from '../../assets/locition1.png';
import location2 from '../../assets/locition2.png';
import location3 from '../../assets/locition3.png';
import location4 from '../../assets/locition4.png';
import location5 from '../../assets/locition5.png';
import location6 from '../../assets/locition6.png';
import map from '../../assets/map.jpg';


const Section6_Contact = () => {
    return (
        <div className='border-2 border-gray-200 rounded-3xl p-2'>
            <div className='mx-auto w-full bg-amber-200'>
                <button className='text-2xl p-2 rounded-xl font-bold text-center mx-auto my-10 bg-lime-500'>Our Branches</button>
            </div>
            <div className='flex items-center justify-evenly flex-wrap gap-5 mb-10'>
                <div className='bg-lime-500/20 border-2 border-lime-400 p-2 rounded-lg'>
                    <img className='w-24 h-24 mx-auto' src={location3} alt="" />
                    <h3 className='text-center text-xl font-semibold'>Coimbatore</h3>
                </div>
                <div>
                    <img className='w-24 h-24' src={location4} alt="" />
                    <h3 className='text-center text-xl font-semibold'>chennai</h3>
                </div>
                <div>
                    <img className='w-24 h-24' src={location5} alt="" />
                    <h3 className='text-center text-xl font-semibold'>hyderabad</h3>
                </div>
                <div>
                    <img className='w-24 h-24' src={location6} alt="" />
                    <h3 className='text-center text-xl font-semibold'>goa</h3>
                </div>
                <div>
                    <img className='w-24 h-24' src={location2} alt="" />
                    <h3 className='text-center text-xl font-semibold'>Kochi</h3>
                </div>
                <div>
                    <img className='w-24 h-24' src={location1} alt="" />
                    <h3 className='text-center text-xl font-semibold'>Mumbai</h3>
                </div>
            </div>
            <div className='flex items-center justify-evenly'>
                <div className=" flex items-center justify-centerpx-4">
                    <form className="bg-blue-950 p-8 rounded-xl shadow-xl w-full max-w-md text-white space-y-10 h-[600px]">
                        <h2 className="text-3xl font-bold border-b-4 border-blue-400 w-fit pb-1">Contact Us</h2>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded-full bg-blue-900/70 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 rounded-full bg-blue-900/70 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <input
                            type="tel"
                            placeholder="Phone *"
                            className="w-full px-4 py-3 rounded-full bg-blue-900/70 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />

                        <textarea
                            rows="4"
                            placeholder="Write message"
                            className="w-full px-4 py-3 rounded-md bg-blue-900/70 placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-md hover:bg-lime-500 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className='h-[600px]'>
                    <img className='w-full h-full object-cover' src={map} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Section6_Contact;

