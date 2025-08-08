import React from 'react';
import MatterBackground from './components/MatterBackground';
import Header from './components/Header';
import Nav from './components/Nav';
import Latest from './components/Latest';
import Footer from './components/Footer';
import Upper from './components/Upper';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <div className="bg-black min-h-screen relative">
        <MatterBackground /> {/* 👈 replaced canvas */}

        <div className="relative z-10 p-2 text-white">
          <div className='flex flex-col justify-between h-screen'>
            <Header/>
             <Nav />
            <div className="relative hover:scale-105 ease-in-out duration-100 group w-34 mx-auto">
              <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Latest Works
              </button>
              <svg
                className='w-7 h-7 absolute top-1/2 -translate-y-14 translate-x-14 group-hover:translate-y-20 ease-in-out duration-100 rotate-90'
                stroke='currentColor'
                strokeWidth="2"
                fill="#000000"
                version="1.1"
                viewBox="0 0 330 330"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394
                    c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394
                    l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"/>
              </svg>
            </div>
          </div>

          <Latest />
          <Slider />
          <Upper className="mt-10" />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
