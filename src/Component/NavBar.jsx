import React from 'react';
import icone from '../assets/icone.png'

const NavBar = () => {
    return (
        <div className='p-4 mx-auto flex justify-between items-center'>
            <header class="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white">
                <div class="flex items-center gap-10">
                    <nav class="flex items-center gap-6 text-sm font-medium">
                        <a href="#" class="hover:text-blue-600">Home</a>
                        <a href="#" class="hover:text-blue-600">Shop</a>
                        <a href="#" class="hover:text-blue-600">Blogs</a>
                        <a href="#" class="hover:text-blue-600">Contact</a>
                    </nav>
                </div>

                <div>
                    <img src={icone} alt="JF Logo" class="h-14" />
                </div>

                <div class="flex items-center gap-6 text-sm font-medium">
                    <a href="#" class="hover:text-blue-600 flex items-center gap-1">
                        <i class="fa-regular fa-user"></i> Login
                    </a>
                    <a href="#" class="hover:text-blue-600">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                    <a href="#" class="hover:text-blue-600 relative">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
                    </a>
                </div>
            </header>
        </div>
    );
};

export default NavBar;