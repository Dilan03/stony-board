import React, { useState, useEffect } from "react";

type PixelProps = {
  selectedColor: string
}

export default function Pixel(props: PixelProps ) {
  const [pixelColor, setPixelColor] = useState("#fff");
  const [oldColor, setOldColor] = useState(pixelColor);
  const [canChangeColor, setCanChangeColor] = useState(true);
  const [canDraw, setcanDraw] = useState(true);

  function canDraww() {
    setcanDraw(current => !current)
    console.log(canDraw)
  }
 
  function applyColor() {
    if (true) {
      setPixelColor(props.selectedColor);
      setCanChangeColor(false);
    }
  }

  if (!canDraw) { 

  }

  useEffect(() => {
    console.log('use effect ran')
  }, [canDraw]);

  function changeColorOnHover() {
    setOldColor(pixelColor);
    setPixelColor(props.selectedColor);
  }

  function resetColor() {
    if (canChangeColor) {
      setPixelColor(oldColor);
    }

    setCanChangeColor(true);
  }

  return (
    <div
      className="pixel"
      onClick={canDraww}
      onMouseMove={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}

      style={{ backgroundColor: pixelColor }}
    ></div>
  );
}
