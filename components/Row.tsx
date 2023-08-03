import React from "react";
import Pixel from "./Pixel";

type RowProps = {
  width: number
  selectedColor: string
}

export default function Row(props: RowProps) {

  let pixels = [];

  for (let i = 0; i < props.width; i++) {
    pixels.push(<Pixel key={i} selectedColor={props.selectedColor} />);
  }

  return <div className="row">{pixels}</div>;
}
