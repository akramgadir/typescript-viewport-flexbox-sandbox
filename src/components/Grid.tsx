import React, { useState, useEffect } from 'react';
import Viewport from './Viewport';
import '../styles/Grid.scss';

interface GridProps {
  rows: number;
  columns: number;
}

const Grid: React.FC<GridProps> = ({ rows, columns }) => {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateViewportSize = () => {
      setViewportSize({
        width: window.innerWidth / columns,
        height: window.innerHeight / rows
      });
    };

    window.addEventListener('resize', updateViewportSize);
    updateViewportSize();

    return () => {
      window.removeEventListener('resize', updateViewportSize);
    };
  }, [rows, columns]);

  const viewports = [];
  for (let i = 0; i < rows * columns; i++) {
    viewports.push(
      <Viewport 
        key={i} 
        number={i + 1} 
        width={viewportSize.width} 
        height={viewportSize.height} 
      />
    );
  }

  const gridStyle = {
    gridTemplateRows: `repeat(${rows}, auto)`,
    gridTemplateColumns: `repeat(${columns}, auto)`
  };

  return (
    <div className="grid" style={gridStyle}>
      {viewports}
    </div>
  );
};

export default Grid;
