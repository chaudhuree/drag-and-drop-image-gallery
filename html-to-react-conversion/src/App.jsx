import React from "react";
import "./App.css";

function App() {
  let dragged;

  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    dragged = event.target;
  }

  function drop(event) {
    event.preventDefault();

    const container = document.getElementById("container");
    const target = event.target;
    let targetParent = target.classList.contains("draggable")
      ? target
      : target.parentElement;

    if (targetParent.classList.contains("draggable")) {
      const temp = document.createElement("img");
      // Replace the target element with a temporary element
      container.replaceChild(temp, targetParent);
      // Replace the dragged element with the target element
      container.replaceChild(targetParent, dragged);
      // Replace the temporary element with the dragged element
      container.replaceChild(dragged, temp);
    }
    // Remove the class myArray if it is present in any of the images
    const images = document.querySelectorAll(".draggable");
    images.forEach((image) => {
      image.classList.remove("myArea");
    });
    container.firstElementChild.classList.add("myArea");
  }
  return (
    <div className="gallery-container" style={{margin:"auto"}}>
      <div
        className="container"
        id="container"
        onDrop={(event) => drop(event)}
        onDragOver={(event) => allowDrop(event)}
      >
        <img
          className="draggable myArea"
          draggable="true"
          onDragStart={(event) => drag(event)}
          src="https://placehold.co/200x200?text=1"
          alt="Image 1"
        />
        <img
          className="draggable"
          draggable="true"
          onDragStart={(event) => drag(event)}
          src="https://placehold.co/200x200?text=2"
          alt="Image 2"
        />
        <img
          className="draggable"
          draggable="true"
          onDragStart={(event) => drag(event)}
          src="https://placehold.co/200x200?text=3"
          alt="Image 3"
        />
        <img
          className="draggable"
          draggable="true"
          onDragStart={(event) => drag(event)}
          src="https://placehold.co/200x200?text=4"
          alt="Image 4"
        />
        <img
          className="draggable"
          draggable="true"
          onDragStart={(event) => drag(event)}
          src="https://placehold.co/200x200?text=5"
          alt="Image 5"
        />
        <img
          className="draggable"
          draggable="true"
          onDragStart={(event) => drag(event)}
          src="https://placehold.co/200x200?text=6"
          alt="Image 6"
        />
        <img
          className="draggable"
          draggable="true"
          onDragStart={(event) => drag(event)}
          src="https://placehold.co/200x200?text=7"
          alt="Image 7"
        />
        <img
          className="draggable"
          draggable="true"
          onDragStart={(event) => drag(event)}
          src="https://placehold.co/200x200?text=8"
          alt="Image 8"
        />
        <img
          className="draggable"
          draggable="true"
          onDragStart={(event) => drag(event)}
          src="https://placehold.co/200x200?text=9"
          alt="Image 9"
        />
        <img
          className="draggable"
          draggable="true"
          onDragStart={(event) => drag(event)}
          src="https://placehold.co/200x200?text=10"
          alt="Image 10"
        />
      </div>
    </div>
  );
}

export default App;
