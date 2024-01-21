import React, { useState } from "react";
import "../styles/Viewport.scss";

interface ViewportProps {
  number: number;
  width: number;
  height: number;
}

const Viewport: React.FC<ViewportProps> = ({ number, width, height }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const viewportClassName = `viewport ${isSpinning ? "spin" : ""}`;

  const handleClick = () => {
    setIsSpinning(!isSpinning);
  };

  return (
    <div className={viewportClassName} onClick={handleClick} style={{ position:'relative'} } data-testid="viewport">
      <p style={{ position: 'absolute', top: 0, left: 0 }}>{number}</p>
      <p>{width.toFixed(0)}x{height.toFixed(0)}px</p>
    </div>

  );
};

export default Viewport;
