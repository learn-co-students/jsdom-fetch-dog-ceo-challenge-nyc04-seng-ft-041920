console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {
    fetchImages()
    fetchBreeds()
})

function fetchImages(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(images => addImgToDOM(images.message))
}

function fetchBreeds(){
    fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
        breeds = Object.keys(results.message)
        addBreedsToDOM(breeds)
    })
}


function addImgToDOM(imgArray){
    const dogImgCont = document.querySelector("#dog-image-container")
    imgArray.forEach(img => {
        const imgTag = document.createElement("img")
        imgTag.src = `${img}`
        dogImgCont.append(imgTag)
    });
}

function addBreedsToDOM(breeds){
    breeds.forEach(breed => createBreedLi(breed))
    filterBreedsOnDOM(breeds)
}

function filterBreedsOnDOM(breedsArray) {
    const dropdown = document.querySelector("#breed-dropdown")
    const dogBreedUl = document.querySelector("#dog-breeds")
    dropdown.addEventListener("change", e => {
        if (e.target.value === "all") {
            dogBreedUl.innerHTML = ""
            addBreedsToDOM(breedsArray)
        } else {
            const letter = e.target.value
            const filtered = breedsArray.filter(breed => breed.startsWith(letter))
            dogBreedUl.innerHTML = ""
            filtered.forEach(item => createBreedLi(item)) 
        }
    })
    
}

function createBreedLi(breed) {
    const dogBreedUl = document.querySelector("#dog-breeds")
    const li = document.createElement("li")
    li.textContent = breed
    dogBreedUl.append(li)
    li.addEventListener("click", e => {
        if (li.style.color === "red") {
            li.style.color = "black"
        } else {
            li.style.color = "red"
        }
    })
}

