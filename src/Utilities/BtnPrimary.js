import React from 'react';

const BtnPrimary = ({ children }) => {
  return (
    <button className="btn border-none text-white font-semibold bg-[#937B92] hover:bg-[#8c488c]">{children}</button>
  );
};

export default BtnPrimary;