import React from 'react';

const BtnPrimary = ({children}) => {
  return (
    <button className="btn border-none text-white font-semibold bg-gradient-to-r from-success to-accent hover:bg-gradient-to-r hover:from-accent hover:to-success">{children}</button>
  );
};

export default BtnPrimary;