import React from 'react';

const CarItem = ({car}) => {
    const {name,img,resaleprice,orginalprice,location,condition,time}=car
    return (
        <div className="card card-compact w-96 bg-base-700 shadow-xl">
        <figure><img className='md:w-full' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-left">{name}</h2>
         <div className='text-left'>
          <p><span className='text-lg font-medium'>Location:</span> {location}</p>
          <p><span className='text-lg font-medium'>Resale Price</span> : $ {resaleprice}</p>
          <p><span className='text-lg font-medium'>Original Price:</span> $ {orginalprice}</p>
          <p><span className='text-lg font-medium'>Used:</span> {condition} Year</p>
          <p><span className='text-lg font-medium'>Post:</span> {time}</p>
         </div>
          <div className="card-actions justify-end">
            <button className="btn w-full btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default CarItem;