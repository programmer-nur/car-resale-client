import { useQuery } from '@tanstack/react-query';
import Loading from '../Shared/Loading';
import Category from './Category';

const Categories = () => {
    
   const {data:categories =[],isLoading}=useQuery({
    queryKey:['categories'],
    queryFn:async()=>{
        const res=await fetch('https://car-resale-server-nurmohammad83.vercel.app/categories')
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
            
            <div className='grid py-6 mx-3 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {
            categories.map(category=><Category
            key={category._id}
            category={category}
            />)
           }
        </div>
        </section>
    );
};

export default Categories;