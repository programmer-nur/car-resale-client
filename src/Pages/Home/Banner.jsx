import React from "react";
import { Link } from "react-router-dom";
import hero from '../../assets/hero.png'
import BtnPrimary from "../../Utilities/BtnPrimary";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <>
    <section className="bg-white bg-img-to-up text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-xl xl:max-w-xl lg:text-left">
			<h1 className="text-3xl text-black/80 font-bold sm:text-6xl">Transform Your Ride, Transform Your Resale
			</h1>
			<p className="mt-6 text-black/50 mb-6 sm:text-base text-lg sm:mb-10">Unlock the Secrets of Smart Resale at WheelWisdom - Where Every Mile Counts Toward Value
			</p>
			<div>
				<Link to={'/categories'}><BtnPrimary>GET Started</BtnPrimary></Link>
			</div>
		</div>
		<motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={hero} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	  </motion.div>
		
	</div>
</section>
    </>
  );
};

export default Banner;
