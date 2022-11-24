import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import BtnPrimary from '../../Utilities/BtnPrimary';
import Loading from '../Shared/Loading';

const Categories = () => {
    
   const {data:categories =[],isLoading}=useQuery({
    queryKey:['categories'],
    queryFn:async()=>{
        const res=await fetch('http://localhost:5000/categories')
        const data =await res.json()
        return data
    }
   })
   if(isLoading){
    <Loading/>
   }
    return (
        <section className='container w-full mx-auto'>
            <h2 className="text-3xl my-4">Categories</h2>
            <div className='grid md:grid-cols-3 gap-6'>
            {
                categories.map((category,i)=><div key={i} className="card shadow-lg image-full">
                <figure><img src={category.img} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-white">{category.category}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                   <BtnPrimary><Link to={`/categories/${category.id}`}>More</Link></BtnPrimary>
                  </div>
                </div>
              </div>)
            }
        </div>
        </section>
    );
};

export default Categories;