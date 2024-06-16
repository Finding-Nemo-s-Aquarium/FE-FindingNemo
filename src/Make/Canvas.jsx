import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import './Canvas.css';

const Canvas = ({ images, handleImageDelete, handleImageToFront, handleImageToBack, handleContextMenu, updateImagePosition }) => {

  const handleDragStart = (e, data) => {
    e.stopPropagation();
  };

  const handleStop = (e, data, index) => {
    updateImagePosition(index, data.x, data.y);
    handleImageToFront(index);
  };

  return (
    <div className="canvas">
      {images.map((image, index) => (
        <Draggable
          key={image.id}
          defaultPosition={{ x: image.x, y: image.y }}
          onStop={(e, data) => handleStop(e, data, index)}
        >
          <div
            className="image-container"
            style={{ zIndex: image.zIndex, position: 'absolute', height: "100px", width: "100px" }}
            onContextMenu={(e) => handleContextMenu(e, image.id, index)}
          >
            <img src={image.src} alt="이미지" onDragStart={handleDragStart} />
            <button onClick={() => handleImageDelete(image.id, image.price)}>삭제</button>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

Canvas.propTypes = {
  images: PropTypes.array.isRequired,
  handleImageDelete: PropTypes.func.isRequired,
  handleImageToFront: PropTypes.func.isRequired,
  handleImageToBack: PropTypes.func.isRequired,
  handleContextMenu: PropTypes.func.isRequired,
  updateImagePosition: PropTypes.func.isRequired,
};

export default Canvas;
