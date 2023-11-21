import React, { useRef } from "react";
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
    {
      id: 11,
      url: "https://placehold.co/200x200?text=11",
    },
  ]);
  let [selectedImage, setSelectedImage] = React.useState([]);
  const ref = useRef(null);
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
  React.useEffect(() => {
    ref.current.firstElementChild.classList.add("myArea");
  }, [images]);
  console.log("selectedImage", selectedImage);
const handleDelete = () => {
  setImages((prev) => prev.filter((image) => !selectedImage.includes(image.id)))
  setSelectedImage([])
}
  return (
    <main className="gallery-container">
      {/*
      heading
    */}
      <div className="header">
      
      <h3>
      {selectedImage.length === 0
        ? "Gallery"
        : selectedImage.length > 1
        ? `${selectedImage.length} images are selected`
        : `${selectedImage.length} image is selected`}
    </h3>
       {selectedImage.length > 0 && <button className="delete-button" onClick={handleDelete}>{selectedImage.length > 1? "Delete files":"Delete File"}</button>}
      </div>
      <div className="line"></div>
      {/*
      gallery-container
    */}
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
              className={
                selectedImage.includes(image.id) ? "selectedFilter" : {}
              }
            />
            <input
              type="checkbox"
              className={`image-checkbox ${
                selectedImage.includes(image.id) ? "visible" : ""
              }`}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedImage([...selectedImage, image.id]);
                } else {
                  setSelectedImage(
                    selectedImage.filter((id) => id !== image.id)
                  );
                }
              }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
