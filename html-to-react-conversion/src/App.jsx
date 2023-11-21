import React ,{useRef} from "react";
import "./App.css";

function App() {
  let [images, setImages] = React.useState([
    {
      id: 1,
      url: "https://placehold.co/200x200?text=1",
    },
    {
      id: 2,
      url: "https://placehold.co/200x200?text=2",
    },
    {
      id: 3,
      url: "https://placehold.co/200x200?text=3",
    },
    {
      id: 4,
      url: "https://placehold.co/200x200?text=4",
    },
    {
      id: 5,
      url: "https://placehold.co/200x200?text=5",
    },
    {
      id: 6,
      url: "https://placehold.co/200x200?text=6",
    },
    {
      id: 7,
      url: "https://placehold.co/200x200?text=7",
    },
    {
      id: 8,
      url: "https://placehold.co/200x200?text=8",
    },
    {
      id: 9,
      url: "https://placehold.co/200x200?text=9",
    },
    {
      id: 10,
      url: "https://placehold.co/200x200?text=10",
    },
  ]);
  let [selectedImage, setSelectedImage] = React.useState([]);
  const ref=useRef(null);
  let dragged;
  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    dragged = event.currentTarget;
  }
  
  function drop(event) {
    event.preventDefault();
  
    const container = document.getElementById("container");
    const target = event.target;
    let targetParent = target.classList.contains("image-container")
      ? target
      : target.parentElement;
  
    if (targetParent.classList.contains("image-container")) {
      const temp = document.createElement("div");
      // Replace the target element with a temporary element
      container.replaceChild(temp, targetParent);
      // Replace the dragged element with the target element
      container.replaceChild(targetParent, dragged);
      // Replace the temporary element with the dragged element
      container.replaceChild(dragged, temp);
    }
    // Remove the class myArray if it is present in any of the images
    const images = document.querySelectorAll(".image-container");
    images.forEach((image) => {
      image.classList.remove("myArea");
    });
    container.firstElementChild.classList.add("myArea");
  }
  React.useEffect(() => {
    ref.current.firstElementChild.classList.add("myArea");
  }, []);
  console.log('selectedImage',selectedImage);
  
  return (
    <div className="gallery-container">
      <div
        className="container"
        id="container"
        onDrop={(event) => drop(event)}
        onDragOver={(event) => allowDrop(event)}
        ref={ref}
      >
      
      {images.map((image) => (
        <div 
          key={image.id} 
          className="image-container draggable hoverEffect" 
          draggable="true" 
          onDragStart={(event) => drag(event)}
        >
          <img
            src={image.url}
            alt={`Image ${image.id}`}
            onClick={() => setSelectedImage(image)}
          />
          <input type="checkbox" />
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;


/*
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
*/