import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full h-12 w-12 flex  justify-center items-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg text-white mb-14 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          mollitia nemo eligendi tempora expedita aperiam optio. Eius, pariatur.
          Quo, fuga!
        </p>

        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-medium px-8 py-2 rounded-full ">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
