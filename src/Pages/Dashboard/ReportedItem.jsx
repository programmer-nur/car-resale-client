import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItem = () => {
    const {data:reports}=useQuery({
        queryKey:['report'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/reports`)
            const data = await res.json()
            console.log(data);
            return data;
        }
    })
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Product</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        reports?.map(report=> <tr key={report._id}>
            <td>{report.userName}</td>
            <th>{report.productName}</th>
            <td>{report.email}</td>
            <td>
              <button className='btn btn-accent max-w-xs'>Delete</button>
            </td>
          </tr>)
     }

    </tbody>
  </table>
</div>
    );
};

export default ReportedItem;