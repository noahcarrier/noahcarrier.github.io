import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className='mt-16'>
          <h1>Noah Carrier</h1>
          <h2>&gt; i build apps, sites, and solutions</h2>
        </div>
        <div className="mt-4 text-gray-400">
          <p>
          I'm a UCF IT-Undergrad skilled in web and application development, looking to build unique and creative solutions for your organization.
          </p>
          <p>
            With additional experience in IT infrastructure, networking technologies, a minor in Entrepreneurship, and experience in project management, I'm fit to handle a variety of tasks.
          </p>
        </div>
        <div className= "mt-16">
          <a id = "learnmore">
            Learn more
          </a>
        </div>
      </div>
    </main>
  );
}
