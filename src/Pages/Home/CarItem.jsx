import React from 'react';

const CarItem = ({car,setModalCars,setReport}) => {
    const {name,sealerName,img,resaleprice,orginalprice,location,condition,time}=car
    return (
        <div className="card card-compact  bg-base-700 shadow-xl">
        <figure><img className='md:w-full' src={img} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title text-left">{name}</h2>
         <div className='text-left'>

          <p><span className='text-lg font-medium'>Sealer Name:</span> {sealerName}</p>
          <p><span className='text-lg font-medium'>Location:</span> {location}</p>
          <p><span className='text-lg font-medium'>Resale Price</span> : $ {resaleprice}</p>
          <p><span className='text-lg font-medium'>Original Price:</span> $ {orginalprice}</p>
          <p><span className='text-lg font-medium'>Used:</span> {condition} Year</p>
          <p><span className='text-lg font-medium'>Post:</span> {time}</p>
         </div>

         <div className="card-actions justify-between mt-2">
          
           <label htmlFor="report-modal"
           className="btn text-white btn-accent"
           onClick={()=>setReport(car)}
           >Report</label>
           <label htmlFor="booking-modal"
           className="btn text-white btn-primary"
           onClick={()=>setModalCars(car)}
           >purchase</label>
        </div>
         
        </div>
      </div>
    );
};

export default CarItem;