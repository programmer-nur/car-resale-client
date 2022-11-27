import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ReportedItem = () => {
    const {data:reports}=useQuery({
        queryKey:['report'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/reports`)
            const data = await res.json()
            return data;
        }
    })
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        reports.map(report=> <tr key={report._id}>
            <th></th>
            <td>{report.name}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>)
     }

    </tbody>
  </table>
</div>
    );
};

export default ReportedItem;