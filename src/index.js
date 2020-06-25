console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

const dogImageContainer = document.getElementById("dog-image-container");
const breedListUL = document.getElementById("dog-breeds");

// const dogImageContainer = document.getElementById("dog-image-container");
// const dogImageContainer = document.querySelector("#dog-image-container");

fetch(imgUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createDogImage(json.message);
  });

fetch(breedUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    for (const breed in json.message) {
      //   console.log(breed);
      const breedElement = document.createElement("li");
      breedElement.textContent = breed;
      breedListUL.append(breedElement);
    }
  });

function createDogImage(dogImages) {
  // loop through each image in the array
  dogImages.forEach(function (image) {
    // create a new element for tht image in the div of the DOM
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", image);
    imageElement.setAttribute("height", "300px");
    imageElement.setAttribute("width", "300px");
    //   console.log(imageElement)
    //   console.log(dogImageContainer);
    // append the image to that newly created element
    dogImageContainer.append(imageElement);
  });
}

function wait_collect_lis() {
  const allBreeds = document.querySelectorAll("li");
  allBreeds.forEach((breed) => {
    breed.addEventListener("click", (event) => {
      //   console.log(event.target.innerText);
      event.target.style.color = "red";
    });
  });
}

setTimeout(() => {
  wait_collect_lis();
}, 500);

// allBreeds.forEach((breed) => {
//   console.log(breed);
// });
