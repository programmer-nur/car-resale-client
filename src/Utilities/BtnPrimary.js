import React from 'react';

const BtnPrimary = ({children}) => {
  return (
    <button className="btn border-none text-white font-semibold bg-blue-500 hover:bg-blue-700">{children}</button>
  );
};

export default BtnPrimary;