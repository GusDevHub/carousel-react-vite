import React, { useState, useEffect } from 'react';
import './App.css';
import { data } from './data.js';

function App() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
      }, 2700); // Change image every 2 seconds (adjust as needed)
    }
    return () => clearInterval(intervalId); // Cleanup function
  }, [autoplay]);

  const leftArrow = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const rightArrow = () => {
    setIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const toggleAutoplay = () => {
    setAutoplay((prevAutoplay) => !prevAutoplay);
  };

  const stopAutoplay = () => {
    setAutoplay(false);
  };

  let currentImage = data[index];

  return (
    <>
      <button onClick={leftArrow}>«</button>
      <img src={currentImage} alt="image" onMouseEnter={stopAutoplay} onMouseLeave={toggleAutoplay} />
      <button onClick={rightArrow}>»</button><br/>
      <button onClick={toggleAutoplay}>{autoplay ? 'II' : '▶'}</button>
    </>
  );
}

export default App;
