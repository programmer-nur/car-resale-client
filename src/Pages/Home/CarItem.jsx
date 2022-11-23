import React from 'react';

const CarItem = ({car}) => {
    return (
        <div className="card bg-accent text-white shadow-xl">
        <figure className="px-10 pt-10">
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions w-full">
            <button className="btn w-full btn-primary">Purchece</button>
          </div>
        </div>
      </div>
    );
};

export default CarItem;