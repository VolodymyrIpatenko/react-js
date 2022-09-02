import React, { useState, useEffect } from 'react';

const Dimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: null,
    height: null,
  });
  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const handlerChngSize = e => {
      const { innerWidth, innerHeight } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handlerChngSize);

    return () => {
      window.removeEventListener('resize', handlerChngSize);
    };
  }, []);

  const { height, width } = dimensions;
  return (
    <div className="dimensions">
      {width}px - {height}px
    </div>
  );
};

export default Dimensions;