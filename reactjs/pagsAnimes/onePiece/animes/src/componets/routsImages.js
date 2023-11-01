
import React, { useState } from 'react';



function ImageSwitcher({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const handleClick = (index) => {
      setCurrentImageIndex(index);
    };



  handleClick = (index) => {
    this.setState({ currentImageIndex: index });
  };

  return (
    <div>
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <div className="button-container">
        {images.map((image, index) => (
          <button
            key={index}
            className={currentImageIndex === index ? 'active' : ''}
            onClick={() => handleClick(index)}
          >
            Image {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSwitcher;
