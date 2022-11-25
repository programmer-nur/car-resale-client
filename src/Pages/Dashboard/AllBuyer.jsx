import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../Shared/Loading';

const AllBuyer = () => {
  
    const {data:buyers,refetch,isLoading}=useQuery({
        queryKey:['buyer'],
        queryFn:async()=>{
        const res = await fetch(`http://localhost:5000/user?opinion=Buyer`)
        const data =await res.json()
        return data
        }
    })
    const handelDeleteBuyer= _id =>{
        fetch(`http://localhost:5000/users/${_id}`,{
          method:'DELETE',
      
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount){
            toast('Delete Successfully')
          }
         refetch()
        })
        
      }
      if(isLoading){
        <Loading/>
      }
    return (
        <div className='m-4'>
            <h3 className="text-3xl">All Buyers</h3>
            <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
  
    <thead>
      <tr>
        <th>Sr No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        buyers?.map((buyer,i)=><tr key={i}>
            <th>{i+1}</th>
            <td>{buyer?.name}</td>
            <td>{buyer?.email}</td>
            <td>
                <button onClick={()=>handelDeleteBuyer(buyer?._id)} className='bg-red-500 text-white p-1 rounded-md'>Delete</button>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default AllBuyer;