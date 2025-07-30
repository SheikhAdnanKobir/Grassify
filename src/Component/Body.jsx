import React from 'react';
import Banner from './Banner';
import Section1_AgriculturalProduct from './Sections/Section1_AgriculturalProduct';
import Section2_LandscapeProduct from './Sections/Section2_LandscapeProduct';
import Section3_TrustedCustomers from './Sections/Section3_TrustedCustomers';
import Section4_WhyUs from './Sections/Section4_WhyUs';
import Section5_WhyCustLoveUs from './Sections/Section5_WhyCustLoveUs';
import Section6_Contact from './Sections/Section6_Contact';

const Body = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner />
            <Section1_AgriculturalProduct />
            <Section2_LandscapeProduct />
            <Section3_TrustedCustomers />
            <Section4_WhyUs />
            <Section5_WhyCustLoveUs />
            <Section6_Contact />
        </div>
    );
};

export default Body;