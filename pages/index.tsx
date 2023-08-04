import React, { Fragment , useState } from "react";
import { CirclePicker } from "react-color";

import dynamic from "next/dynamic";
const DrawingPanel = dynamic(() => import("../components/DrawingPanel"), { ssr: false })


export default function Home() {

  const [selectedColor, setColor] = useState("#f44336");

  function changeColor(color: any) {
    setColor(color.hex);
  }

  return (
    <Fragment>
      <h1>The home Page</h1>
      <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      <DrawingPanel
        width={16}
        height={16}
        selectedColor={selectedColor}
      />
    </Fragment>
  );
}

// import { useDraw } from '../hooks/useDraw'
// import { FC } from 'react'

// interface pageProps {}

// const page: FC<pageProps> = ({}) => {

//   const { canvasRef, onMouseDown } = useDraw(drawLine)

//   function drawLine({ctx, currentPoint, prevPoint}:Draw) {
//     const {x: currX, y: currY} = currentPoint
//     const lineColor = '#000'
//     const lineWidth = 5

//     let startPoint = prevPoint ?? currentPoint
//     ctx.beginPath()
//     ctx.lineWidth = lineWidth
//     ctx.strokeStyle = lineColor
//     ctx.moveTo(startPoint.x, startPoint.y)
//     ctx.lineTo(currX, currY)
//     ctx.stroke()

//     ctx.fillStyle = lineColor
//     ctx.beginPath()
//     ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
//     ctx.fill()
//   }

//   return (
//     <div className='w-screen h-screen bg-white flex justify-center items-center'>
//       <canvas
//       onMouseDown={onMouseDown}
//       ref={canvasRef}
//       width={750}
//       height={750}
//       className='border border-black rounded-md'
//       />
      
//       <div className='w-[200px] h-[80px] group shadow-[-20px_0_0_0_black,20px_0_0_0_black,0_-10px_0_0_white,0_10px_0_0_white] mx-auto my-[2em]'>
//         <div className='relative -top-[42px] w-[200px] h-[100px] shadow-[-10px_0_0_0_black,10px_0_0_0_black,0_-10px_0_0_black,0_10px_0_0_black] mx-auto my-[2em] group-hover:bg-[blue]'>
//           <div className='w-[221px] h-[80px] bg-[white] absolute left-[-10px] top-[10px]  group-hover:bg-[blue]'>

//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default page