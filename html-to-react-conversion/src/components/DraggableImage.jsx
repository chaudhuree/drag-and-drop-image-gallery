// src/components/DraggableImage.js
import React from 'react';

const DraggableImage = ({ id, text }) => {
  const drag = (event) => {
    event.dataTransfer.setData('text', event.target.id);
  };

  return (
    <div
      id={id}
      className="draggable"
      draggable="true"
      onDragStart={drag}
    >
      <img
        src={`https://placehold.co/200x200?text=${text}`}
        alt={`Image ${text}`}
      />
    </div>
  );
};

export default DraggableImage;
