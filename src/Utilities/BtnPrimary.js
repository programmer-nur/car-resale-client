import React from 'react';

const BtnPrimary = ({children}) => {
  return (
    <button className="btn border-none text-white font-semibold bg-gradient-to-r from-success to-accent">{children}</button>
  );
};

export default BtnPrimary;