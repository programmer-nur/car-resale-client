import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import car from '../../assets/car.jpg'
import BtnPrimary from '../../Utilities/BtnPrimary';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${car})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
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