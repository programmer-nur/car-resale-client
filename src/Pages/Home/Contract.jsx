import React from "react";

const Contract = () => {
  return (
    <div style={{backgroundImage:"url(https://assets-global.website-files.com/64e4a47477bc12449a13a52c/64ef828fa7b5db06ae374ac1_Mask%20Group%201.svg)",backgroundColor:"#272427",backgroundPosition:"center",backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className="flex flex-col md:flex-row py-10 rounded-lg font-roboto justify-center mx-12  md:mx-28 my-10 sm:my-24 items-center">
      <div className="flex flex-col px-10 mb-5 text-center md:text-start md:w-1/2 items-center justify-between">
        <div className="space-y-2 ">
          <h2 className="text-4xl text-white font-bold leading-tight lg:text-5xl">
            Contract Us
          </h2>
          <div className="text-white">
            We will contact you back in 5 hours max. Please check your email in
            5 hours. You can also contact our regional distributor directly.
          </div>
        </div>
      </div>
      <form novalidate="" className="md:w-1/2  bg-white p-8 mx-6 lg:mx-24 rounded-lg">
        <div>
          <label for="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label for="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label for="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="input input-bordered w-full"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#937B92] btn border-none w-full mt-3 rounded-full text-white animate-pulse"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contract;
