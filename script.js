// Constants for the range of image IDs
const START_ID = 1800001;
const END_ID = 1901800;

// The image gallery element
const imageGallery = document.getElementById("image-gallery");

// Loop through each image ID in the range and fetch the corresponding image
for (let i = START_ID; i <= END_ID; i++) {
  // Create an image element for the fetched image
  if (i == 1800261 || i == 1901771) {
    continue;
  }
  const image = document.createElement("img");

  // Create a promise for fetching the image
  const promise = new Promise((resolve, reject) => {
    image.onload = resolve;
    image.onerror = reject;
      image.src = `https://fp.lmu.edu.ng/clearapi/images/app/${i}.JPG`;
  });

  // Append the image element to the gallery as soon as it is loaded
  promise.then(() => {
    // Create a span element to display the image ID
    const imageID = document.createElement("span");
    imageID.innerHTML = `Reg No.: ${i}`;

    // Create a container div for the image and ID
    const container = document.createElement("div");
    container.classList.add("image");
    container.appendChild(image);
    container.appendChild(imageID);

    // Add the container to the image gallery
    imageGallery.appendChild(container);
    container.classList.add("fade-in");
  });
}

let searchInput = document.querySelector("#search-input");
let images = dowcument.querySelector("image-gallery");
let i = START_ID;

// searchBox.oninput = () => {
//   let value = searchBox.value;
//   images.forEach(filter -> {
    
//   });
// }

