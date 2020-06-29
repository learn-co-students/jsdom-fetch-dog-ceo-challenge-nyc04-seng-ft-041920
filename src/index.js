console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const dogSection = document.querySelector('#dog-image-container')
const breedSection = document.querySelector("#dog-breeds")


fetch(imgUrl)
    .then(response => response.json())
    .then(json => json.message.forEach(renderOneDog))

function renderOneDog(dogObj) {
    const dogContainer = document.createElement("div")
    dogContainer.className = "dog-container"
    dogContainer.innerHTML = `
        <img src="${dogObj}"/>
    `
    dogSection.append(dogContainer)
}

// let breeds = [];

fetch(breedUrl)
.then(response => response.json())
.then(json => Object.keys(json.message))
.then(breedArray => {
    // breeds = breedArray;
    let breedsFiltered = filterBreeds(breedArray);
    breedsFiltered.forEach(renderOneBreed);
})

function renderOneBreed(breedObj) {
    const breedListItem = document.createElement("li")
    breedListItem.innerHTML = `${breedObj}`
    breedSection.append(breedListItem)

    breedListItem.addEventListener("click", event => {
        const text = event.target.closest("li")
        .style.color = "red"
    }) 
}

function filterBreeds(breeds) {
    const breedDropdown = document.querySelector("#breed-dropdown");
    let optionValue = breedDropdown.options[breedDropdown.selectedIndex].value;
    let filteredBreeds = breeds.filter(breed => breed.startsWith(optionValue));
    
    breedDropdown.addEventListener("change", event => {
        optionValue = event.target.value
        filteredBreeds = breeds.filter(breed => breed.startsWith(optionValue));

        breedSection.innerHTML = "";
        filteredBreeds.forEach(renderOneBreed);
    })
    return filteredBreeds;

}