import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import car from "../../assets/herocar.jpg";
import BtnPrimary from "../../Utilities/BtnPrimary";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${car})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <motion.h2
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl"
          >
            Worldwide Exporters
          </motion.h2>
          <h1
            className="md:text-5xl text-4xl text-white font-bold text-center my-4 sm:py-7"
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
          <Link to="/categories">
            <BtnPrimary>Explore Now</BtnPrimary>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
