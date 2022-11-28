import React from 'react';
import { Link } from 'react-router-dom';
import BtnPrimary from '../../Utilities/BtnPrimary';

const Category = ({category}) => {
    return (
        <div className="card shadow-lg image-full">
                <figure><img src={category.img} alt="Shoes" /></figure>
                <div className="card-body relative">
                  <h2 className="card-title text-white">{category.category}</h2>
                  <div className="card-actions absolute right-4 bottom-3 justify-end">
                   <BtnPrimary><Link to={`/categories/${category.id}`}>More</Link></BtnPrimary>
                  </div>
                </div>
              </div>)
   
};

export default Category;