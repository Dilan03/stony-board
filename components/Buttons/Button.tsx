import React from "react";

type ButtonProps = {
   children: React.ReactNode,
   className: string
}

export default function MainGrid(props: ButtonProps) {

   return (
      <div className='w-[200px] h-[80px] group shadow-[-20px_0_0_0_black,20px_0_0_0_black,0_-10px_0_0_white,0_10px_0_0_white] mx-auto my-[2em]'>
         <div className='relative -top-[42px] w-[200px] h-[100px] shadow-[-10px_0_0_0_black,10px_0_0_0_black,0_-10px_0_0_black,0_10px_0_0_black] mx-auto my-[2em] group-hover:bg-[blue]'>
            <div className='w-[221px] h-[80px] bg-[white] absolute left-[-10px] top-[10px]  group-hover:bg-[blue]'>

            </div>
         </div>
      </div>
   );
}