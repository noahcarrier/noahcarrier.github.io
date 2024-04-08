import React from 'react';

export default function Navbar() {
    return (
        <nav className='p-4'>
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-white text-lg font-bold"></span>
                
                <div className="hidden md:flex items-center">
                    <a href="#" className="mr-16 navitem" >About</a>
                    <a href="#" className="mr-16 navitem" >Skills</a>
                    <a href="#" className="mr-16 navitem" >Projects</a>
                    <a href="#" className="navitem">Contact</a>
                </div>
            </div>
        </nav>
    );
}

