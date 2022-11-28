import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import BtnPrimary from '../../Utilities/BtnPrimary';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/Rcfgvh2/pexels-albin-berlin-919073.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className='text-2xl'>Worldwide Exporters</h2>
          <h1
              className="md:text-5xl text-4xl text-white font-bold text-center my-4"
              style={{
                textShadow: "0 0 50px black, 0 0 50px black, 0 0 10px yellow",
              }}
            >
              <Typewriter
                options={{
                  strings: ["Find Your dream car"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 4000,
                }}
              />
            </h1>
           <Link to='/categories'><BtnPrimary>Explore Now</BtnPrimary></Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;