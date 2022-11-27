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
            <h2 className="text-4xl mx-3 font-semibold my-4">Categories</h2>
            
            <div className='grid mx-3 md:grid-cols-3 gap-6'>
            {
                categories.map((category,i)=><div key={i} className="card shadow-lg image-full">
                <figure><img src={category.img} alt="Shoes" /></figure>
                <div className="card-body relative">
                  <h2 className="card-title text-white">{category.category}</h2>
                  <div className="card-actions absolute right-4 bottom-3 justify-end">
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