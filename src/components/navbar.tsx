import React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {

    

  
    return (
      <nav className='flex justify-between items-center p-4'>
      <div className="justify-start flex space-x-16 w-1/3">
        <a href = "#about" className='navitem'>
        About
        </a>
        <a href = "#skills" className='navitem'>
        Skills
        </a>
        <a href = "#projects" className='navitem'>
        Projects
        </a>
      </div>
      <div className='w-1/3 text-center navtitle'>
        <a>
        Noah Carrier
        </a>
      </div>
      <div className='flex space-x-8 w-1/3 justify-end navitem'>
        <a className='sociallogo'>
        <img src = "https://www.svgrepo.com/show/325236/github.svg" className = "w-6 h-6" />
        </a>
        <a className='sociallogo'>
        <img src = "https://www.svgrepo.com/show/108614/linkedin.svg" className = "w-6 h-6" />
        </a>
        <a className='sociallogo'>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg" className = "w-6 h-6" />
        </a>
      </div>
      
      </nav>
    );
}

