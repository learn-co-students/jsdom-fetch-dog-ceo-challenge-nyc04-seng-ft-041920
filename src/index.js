
fetchDogImg();
fetchDogBreeds();

//Challenge 1

function fetchDogImg() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        renderDogImages(json)
    })  
}

function renderDogImages(dogs) {
    const dogImgContainer = document.querySelector("#dog-image-container");
    dogs.message.forEach(function(dogImgURL){
        const dogImage = document.createElement("img")
        dogImage.src = dogImgURL
        dogImgContainer.append(dogImage)
    });
}

//Challenge 2
function fetchDogBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        // console.log(json.message)
        renderDogBreeds(json)
    })  
}

function renderDogBreeds(dogs) {
    const dogBreedContainer = document.querySelector("#dog-breeds");
    dogObjectKeys =  Object.keys(dogs.message)
    dogObjectKeys.forEach(function(dog){
        const dogBreed = document.createElement("li")
        dogBreed.textContent = dog
        dogBreedContainer.append(dogBreed)
//Challenge 3
        dogBreed.addEventListener("click", function(e) {
            dogBreed.style.color = "pink";
        })
    });
}

//Challenge 4 - To Do

