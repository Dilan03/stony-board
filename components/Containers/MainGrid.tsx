import React from "react";

type MainGridProps = {
   children: React.ReactNode,
   className: string
}

export default function MainGrid(props: MainGridProps) {

   return (
      <div className={` p-[10px] border-[4px] border-solid border-white shadow-[-4px_0_0_0_black,4px_0_0_0_black,0_-4px_0_0_black,0_4px_0_0_black] ${props.className}`}>
         {props.children}
      </div>
   );
}