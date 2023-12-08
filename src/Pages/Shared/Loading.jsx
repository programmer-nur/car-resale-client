import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div>
        <div className="w-16 h-16 border-t-4 border-b-4 border-[#937B92] rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
