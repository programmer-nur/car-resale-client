
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CarItem from './CarItem';
import PurchechModal from './PurchechModal';
import Report from './Report';

const CarItems = () => {
    const cars= useLoaderData([])
   
    const [modalCars,setModalCars]=useState(null)
    const [report, setReport]=useState(null)
   
    return (
        <section className='container my-5 w-full mx-auto
        px-9'>
            <h2 className="text-4xl font-bold my-5">Our Service</h2>
            <div className='grid md:grid-cols-3 gap-9'>
            {
                cars.map(car=><CarItem
                key={car._id}
                car={car}
                setReport={setReport}
                setModalCars={setModalCars}
                />)
            }
        </div>
            {
                <PurchechModal
                modalCars={modalCars}
                
                />
            }
            {
                <Report
               report={report}
                />

            }
        </section>
    );
};

export default CarItems;