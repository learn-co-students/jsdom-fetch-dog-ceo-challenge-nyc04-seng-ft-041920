let dogBreeds = [];

fetchDogImg();
fetchDogBreeds();
// filterDogs();


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
        dogObjectKeys = Object.keys(json.message)
        //instead of pushing each value, adding dogObjectKeys array into dogBreeds using splice
        dogBreeds.splice(0, 1, ...dogObjectKeys)
        renderDogBreeds(dogBreeds);
        filterDogs();
    })  
}

function renderDogBreeds(dogs) {
    const dogBreedContainer = document.querySelector("#dog-breeds");
    // dogObjectKeys =  Object.keys(dogs.message)
    dogs.forEach(function(breed){
        const dogBreed = document.createElement("li")
        dogBreed.textContent = breed
        dogBreedContainer.append(dogBreed)
//Challenge 3
        dogBreed.addEventListener("click", function(e) {
            dogBreed.style.color = "pink";
        })
    });
}

//Challenge 4 - To Do
//only show dog breeds starting with dropdown letters
//put a dog breeds array globally ? refactor renderDogBreeds

//not sure why I made this but it's here
function renderReset() {
    const dogBreedContainer = document.querySelector("#dog-breeds");
    const dogLis = dogBreedContainer.querySelectorAll("li");
    dogLis.forEach(function(li) {
        li.style.display = "none";
    })
}


function filterDogs() {
        const dogBreedContainer = document.querySelector("#dog-breeds");
        const dogLis = dogBreedContainer.querySelectorAll("li");
        let dropDown = document.querySelector("#breed-dropdown");
        dropDown.addEventListener("change", function(e) {
        let letter = dropDown.value; 
        renderReset();
        dogLis.forEach(function(li) {
            if (li.textContent[0] === letter) {
                li.style.display = "list-item"
            }
        })
    })
}

//this all needs to be refactored