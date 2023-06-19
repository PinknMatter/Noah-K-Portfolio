import React, { useState } from 'react';

const HoverEffect = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = React.useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const overlayStyles = {
    top: mousePosition.y,
    left: mousePosition.x,
    width: hovered ? containerRef.current.offsetWidth : 0,
    height: hovered ? containerRef.current.offsetHeight : 0,
  };

  return (
    <div
      className={`hover-effect ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {children}
      {hovered && <div className="hover-effect-overlay" style={overlayStyles} />}
    </div>
  );
};

export default HoverEffect;