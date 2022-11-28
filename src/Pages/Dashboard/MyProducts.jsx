import { useQuery } from '@tanstack/react-query';
import React, { useContext} from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Shared/Loading';
import MyProductsRow from './MyProductsRow';

const MyProducts = () => {
    const { user} = useContext(AuthContext);

  const {data:products=[],refetch,isLoading}=useQuery({
    queryKey:['myCars'],
    queryFn:async()=>{
        const res =await fetch(`https://car-resale-server.vercel.app/myCars?email=${user?.email}`, {
            method:'GET',
          headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
          },
        })
        const data= await res.json()
        return data;
    }
  })

  const handelDeleting =(id)=>{
    fetch(`https://car-resale-server.vercel.app/cars/${id}`,{
      method:'DELETE',
      headers:{
        authorization:`bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
     if(data.deletedCount){
       refetch()
      toast.success('Delete Successfully')
     }
    })
  }
  const handelAddv=(add)=>{
    fetch(`https://car-resale-server.vercel.app/addv`,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(add)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      toast('Addv Successfully')
    })
  }
  if (isLoading) {
    <Loading />;
  }
    return (
        <section className='container w-full mx-auto p-4'>
            <h2 className='text-4xl mb-4'>My Products: {products.length}</h2>
        <div className='grid grid-cols-2 gap-3'>
            {
                products.map(product=><MyProductsRow
                key={product._id}
                product={product}
                handelDeleting={handelDeleting}
                handelAddv={handelAddv}
                />)
            }
        </div>
        </section>
    );
};

export default MyProducts;