
import React, { useState } from "react"; 


const Slideshow = () => {
  
  const [index, setIndex] = useState(0);

  const totalImages = 10;

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === totalImages - 1 ? prevIndex : prevIndex + 1));
  };

  const handleBackToStart = () => {
    setIndex(0);
  };

  return (
    <div className="slideshow">
      <h1>Slide Show</h1>
    
      <img
        src={`https://picsum.photos/300/200?image=${index}`}
        alt="Slideshow"
        className="slideshow-image"
      />
      
      <div className="controls">
        <button onClick={handlePrevious} disabled={index === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={index === totalImages - 1}>
          Next
        </button>
        <button onClick={handleBackToStart} disabled={index === 0}>
          Back to Start
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
