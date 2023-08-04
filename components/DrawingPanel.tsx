import React, { useRef, useEffect } from "react";
import Row from "./Row";
import {exportComponentAsPNG} from "react-component-export-image";

type DrawingPanelProps = {
  width: number
  height: number
  selectedColor: string 
}

export default function DrawingPanel(props: DrawingPanelProps) {
  
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(function onFirstMount() {

  }, []); 

  let rows = [];

  for (let i = 0; i < props.height; i++) {
    rows.push(<Row key={i} width={props.width} selectedColor={props.selectedColor} />);
  }
  
  return (
    <div id="drawingPanel" >
      <div id="pixels" ref={panelRef}>
        {rows}
      </div>
      <button onClick={(e) => exportComponentAsPNG(panelRef)} className="button">
        Export as PNG
      </button>
    </div>
  );
}
