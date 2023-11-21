// src/components/Container.js
import React from 'react';
import DraggableImage from './DraggableImage';

const Container = () => {
  const allowDrop = (event) => {
    event.preventDefault();
  };

  const drag = (event) => {
    event.dataTransfer.setData('text', event.target.id);
  };

  const drop = (event) => {
    event.preventDefault();
    const draggedId = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(draggedId);

    const target = event.target;
    let targetParent = target.classList.contains('draggable')
      ? target
      : target.parentElement;

    if (targetParent.classList.contains('draggable')) {
      const temp = document.createElement('div');
      temp.setAttribute('id', 'temp');
      // Replace the target element with a temporary element
      targetParent.parentNode.replaceChild(temp, targetParent);
      // Replace the dragged element with the target element
      targetParent.parentNode.replaceChild(draggedElement, targetParent);
      // Replace the temporary element with the dragged element
      temp.parentNode.replaceChild(targetParent, temp);
    }
  };

  return (
    <div
      className="container"
      id="container"
      onDrop={drop}
      onDragOver={allowDrop}
    >
      <DraggableImage id="1" text="1" />
      <DraggableImage id="2" text="2" />
      <DraggableImage id="3" text="3" />
      <DraggableImage id="4" text="4" />
      <DraggableImage id="5" text="5" />
      <DraggableImage id="6" text="6" />
      <DraggableImage id="7" text="7" />
      <DraggableImage id="8" text="8" />
      <DraggableImage id="9" text="9" />
      <DraggableImage id="10" text="10" />
    </div>
  );
};

export default Container;
