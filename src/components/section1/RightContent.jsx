import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log(props.users);
  return (
    <div id="right" className="flex gap-10 overflow-x-auto h-full rounded-4xl p-6 2-2/3">
      {props.users.map(function(elem, idx){
        return <RightCard color={elem.color} key={idx} id={idx} img={elem.img} tag={elem.tag} />;
      })}
      
      
    </div>
  );
};

export default RightContent;
