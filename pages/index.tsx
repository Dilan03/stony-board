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
// import DrawingPanel from '@/components/DrawingPanel'

// interface pageProps {}

// const page: FC<pageProps> = ({}) => {

//   const { canvasRef, onMouseDown } = useDraw(drawLine)

//   function drawLine({ctx, currentPoint, prevPoint}:Draw) {
//     const {x: currX, y: currY} = currentPoint
//     const lineColor = '#000'
//     const lineWidth = 100

//     let startPoint = prevPoint ?? currentPoint
//     ctx.beginPath()
//     ctx.lineWidth = lineWidth
//     ctx.strokeStyle = lineColor
//     ctx.moveTo(startPoint.x, startPoint.y)
//     ctx.lineTo(currX, currY)
//     ctx.stroke()

//     ctx.fillStyle = lineColor
//     ctx.beginPath()
//     ctx.arc(startPoint.x, startPoint.y, 100, 0, Math.PI/2)
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
//     </div>
//   )
// }

// export default page