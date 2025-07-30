import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                    {/* Newsletter */}
                    <div className="col-span-1">
                        <h2 className="text-xl font-semibold mb-2">Join Our JF Products</h2>
                        <p className="text-sm mb-4">We’ll tell you about store updates and discounts</p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-md bg-blue-700 text-white placeholder-white focus:outline-none mb-2"
                        />
                        <div className="flex items-center mb-4">
                            <input type="checkbox" id="subscribe" className="mr-2" />
                            <label htmlFor="subscribe" className="text-sm">Yes, subscribe me to your newsletter.</label>
                        </div>
                        <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                            Join Now
                        </button>
                        <div className="mt-6">
                            <img src="https://i.ibb.co/2SK4vn2/jf-logo.png" alt="JF Logo" className="w-16 mb-2" />
                            <p className="text-sm">
                                <span className="font-semibold">Our Branches</span><br />
                                Coimbatore, Chennai, Hyderabad, Goa, Kochi
                            </p>
                        </div>
                    </div>

                    {/* Information */}
                    <div className="col-span-1">
                        <h2 className="text-xl font-semibold mb-4">Information</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Shop</a></li>
                            <li><a href="#" className="hover:underline">Our Story</a></li>
                            <li><a href="#" className="hover:underline">Blogs</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Helpful */}
                    <div className="col-span-1">
                        <h2 className="text-xl font-semibold mb-4">Helpful</h2>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
                            <li><a href="#" className="hover:underline">My Account</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Button */}
                    <div className="col-span-1 flex items-center justify-center">
                        <button className="bg-lime-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-500 transition">
                            Contact Us
                        </button>
                    </div>
                </div>

                
            </footer>
            {/* Bottom bar */}
                <div className="pt-10 px-10 flex  justify-between items-center">
                    <div className='mb-10'>
                        <p>Copyright © 2025 JF Products. All rights reserved</p>
                    </div>
                    <div className="flex gap-5  mb-10 ">
                        <a href="#"><FaFacebook className='text-2xl'/></a>
                        <a href="#"><FaInstagram className='text-2xl'/></a>
                        <a href="#"><FaYoutube className='text-2xl'/></a>
                    </div>
                </div>
        </div>
    );
};

export default Footer;