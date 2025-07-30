import React from 'react';
import NavBar from './NavBar.jsx';
import Banner from './Banner.jsx';
import Body from './Body';
import Footer from './Footer.jsx';

const HandleLayout = () => {
    return (
        <div className='mx-auto px-4 sm:px-6 lg:px-8 poppins'>
            <NavBar />
            <Body />
            <Footer />
        </div>
    );
};

export default HandleLayout;