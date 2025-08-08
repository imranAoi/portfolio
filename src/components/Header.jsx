import React, { useState, useEffect, useRef } from 'react';
import icon from '../assets/images/letter-i.png';


function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [clickStep, setClickStep] = useState(0); // 0 = closed, 1 = hello, 2 = resume
  const iconRef = useRef(null);

  // Apply dark mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (iconRef.current && !iconRef.current.contains(event.target)) {
        setClickStep(0);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleIconClick = () => {
    setClickStep((prev) => (prev + 1) % 3); // cycle 0 → 1 → 2 → 0
  };

  const popupMessages = ["", "Hello", <a
    href='/MOHD_resume.pdf'
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 font-semibold "
    
  >📄 resume</a>];

  return (
    <div className="flex items-center justify-between px-2 bg-white dark:bg-gray-600 opacity-70 rounded relative overflow-hidden">
      {/* Logo with Popup */}
      <div ref={iconRef} className="relative flex items-center">
        <img
          onClick={handleIconClick}
          className={`w-14 lg:w-18  cursor-pointer transform transition-transform duration-500 
            ${clickStep > 0 ? 'rotate-180' : 'rotate-0'}`}
          src={icon}
          alt="icon"
        />

        {/* Animated Popup in Header Row */}
        <div
          className={`absolute left-16 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out
            ${clickStep > 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}
            bg-white dark:bg-gray-700 shadow-lg rounded px-2 py-2 text-sm z-50 
            backdrop-blur-md bg-opacity-80`}
        >
          <p className="text-gray-800 w-20 dark:text-gray-200">
            {popupMessages[clickStep]}
          </p>
        </div>
      </div>

      {/* Icons */}
      <div className="flex justify-center items-center lg:gap-8 gap-4">
        {/* Sun */}
        <button
          onClick={() => setDarkMode(false)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Light Mode"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-sun"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </button>

        {/* Moon */}
        <button
          onClick={() => setDarkMode(true)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Dark Mode"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-moon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>

        {/* Phone */}
        <a
          href="tel:+919310363878"
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          aria-label="Call Us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            fill="none" stroke="#fff" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-phone"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
              19.79 19.79 0 0 1-8.63-3.07 
              19.5 19.5 0 0 1-6-6 
              19.79 19.79 0 0 1-3.07-8.67
              A2 2 0 0 1 4.11 2h3a2 2 0 0 1 
              2 1.72 12.84 12.84 0 0 0 .7 2.81 
              2 2 0 0 1-.45 2.11L8.09 9.91
              a16 16 0 0 0 6 6l1.27-1.27
              a2 2 0 0 1 2.11-.45 
              12.84 12.84 0 0 0 2.81.7
              A2 2 0 0 1 22 16.92z">
            </path>
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919310363878"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded hover:bg-green-500"
          aria-label="WhatsApp"
        >
          <svg aria-hidden="true" focusable="false" data-prefix="fab"
            data-icon="whatsapp" className="svg-inline--fa fa-whatsapp"
            role="img" xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 448 512"
          >
            <path fill="white" d="M380.9 97.1C339 55.1 
              283.2 32 223.9 32c-122.4 0-222 
              99.6-222 222 0 39.1 10.2 77.3 29.6 
              111L0 480l117.7-30.9c32.4 17.7 
              68.9 27 106.1 27h.1c122.3 0 224.1-99.6 
              224.1-222 0-59.3-25.2-115-67.1-157zm-157 
              341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 
              18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 
              0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 
              19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 
              130.5 0 101.8-84.9 184.6-186.6 
              184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18
              -5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 
              18-17.6 21.8-3.2 3.7-6.5 4.2-12 
              1.4-32.6-16.3-54-29.1-75.5-66
              -5.7-9.8 5.7-9.1 16.3-30.3 
              1.8-3.7.9-6.9-.5-9.7
              -1.4-2.8-12.5-30.1-17.1-41.2
              -4.5-10.8-9.1-9.3-12.5-9.5
              -3.2-.2-6.9-.2-10.6-.2
              -3.7 0-9.7 1.4-14.8 6.9
              -5.1 5.6-19.4 19-19.4 46.3
              0 27.3 19.9 53.7 22.6 57.4
              2.8 3.7 39.1 59.7 94.8 83.8
              35.2 15.2 49 16.5 66.6 13.9
              10.7-1.6 32.8-13.4 37.4-26.4
              4.6-13 4.6-24.1 3.2-26.4
              -1.3-2.5-5-3.9-10.5-6.6z">
            </path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Header;
