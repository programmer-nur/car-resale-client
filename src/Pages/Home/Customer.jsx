import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Customer = ({ review }) => {
  const { name,img, rating, des } = review || "";

  return (
    <div className="card w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] bg-accent rounded-xl text-white shadow hover:shadow-xl hover:shadow-accent duration-75">
      <div className="card-body rounded-md p-8 text-center">
        <div className="avatar justify-center">
          <div className="w-16 lg:w-24 mask rounded-full">
            <img src={img} alt="" />
          </div>
        </div>
        <h2 className="text-2xl">{name}</h2>
        <hr className="border-separate my-2 border-primary" />
        <p>{des}</p>
        <hr className="border-separate my-2 border-primary" />
        <p className="text-xl">
          Ratings &nbsp; {rating}{" "}
          <FontAwesomeIcon icon={faStar} size="sm"></FontAwesomeIcon>
        </p>
      </div>
    </div>
  );
};

export default Customer;
