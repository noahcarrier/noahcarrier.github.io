import React from 'react';

export default function Navbar() {
    return (
        <nav className='p-4'>
            <div className="container mx-auto flex justify-center items-center">
                <span className="text-white text-lg font-bold"></span>
                
                <div className="hidden md:flex items-center">
                    <a href="#about" className="mr-16 navitem hover:underline" >About</a>
                    <a href="#skills" className="mr-16 navitem hover:underline" >Skills</a>
                    <a href="#projects" className="mr-16 navitem hover:underline" >Projects</a>
                    <a href="#contact" className="navitem hover:underline">Contact</a>
                </div>
            </div>
        </nav>
    );
}

