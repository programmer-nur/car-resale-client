import React from 'react';

const MyProductsRow = ({product,handelDeleting}) => {
    const {name,resaleprice,_id,img}=product
    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
	<img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-56 bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
			<p className="text-gray-100">ReSale Price ${resaleprice}</p>
		</div>
		<button onClick={()=>handelDeleting(_id)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900">Delete</button>
	</div>
</div>
    );
};

export default MyProductsRow;