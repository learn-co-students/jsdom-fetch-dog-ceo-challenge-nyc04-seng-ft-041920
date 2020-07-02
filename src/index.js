console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogBreeds = document.querySelector('#dog-breeds')

// #1
fetch(imgUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(newResponse){
        renderDogImages(newResponse)
    })

function renderDogImages(pictures){
    const imgContainer = document.querySelector('#dog-image-container')
    pictures.message.forEach((picture) => {
        const newEle = document.createElement("img")
        newEle.src = picture
        newEle.setAttribute('height', '250px')
        newEle.setAttribute('width', '250px')
        imgContainer.append(newEle)
    })
}
// -----------------------------------------------------------------------------------------
// #2 && #3
fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        renderBreedNames(data)
    })


function renderBreedNames(data){
    const dogBreeds = document.querySelector('#dog-breeds')
    for (const name in data.message){
        const newEle = document.createElement('li')
        newEle.innerText = name
        dogBreeds.appendChild(newEle)

        newEle.addEventListener("click", () => {
            newEle.style.color = "blue"
        })
    }
}
// -----------------------------------------------------------------------------------------
// #4

let drop = document.querySelector("#breed-dropdown")
drop.addEventListener("change", (e) => {
    let allLis = dogBreeds.querySelectorAll('li')
    allLis.forEach(eachLi => {
        if(eachLi.innerText.charAt(0) !== e.target.value){
            eachLi.remove()
        }
    })
});








