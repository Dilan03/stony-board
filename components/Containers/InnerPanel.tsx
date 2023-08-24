import React from "react";

type InnerPanelProps = {
   children: React.ReactNode,
   className: string
}

export default function InnerPanel(props: InnerPanelProps) {

   return (
      <div className={`border-[4px] border-solid border-black shadow-[-4px_0_0_0_rgb(64,62,57),4px_0_0_0_rgb(229,222,207),0_-4px_0_0_rgb(64,62,57),0_4px_0_0_rgb(229,222,207)] ${props.className}`}>
         {props.children}
      </div>
   );
}