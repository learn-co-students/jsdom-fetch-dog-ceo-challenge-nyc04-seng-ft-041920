console.log('%c HI', 'color: firebrick')

const divContainer = document.querySelector('#dog-image-container')
const ul = document.querySelector('#dog-breeds')
const dropdownOption = document.querySelector('#breed-dropdown')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(imgUrl)
.then(resp => {
  return resp.json()
})
.then(json => {
  createDogImg(json.message)
}) 

fetch(breedUrl)
.then(resp => {
  return resp.json()
}).then(json => {
  createOptions()
  listBreeds(json.message)
  filterBreed()
})

function createDogImg(data) {
  data.forEach((img_src) => {
    const img = document.createElement('img')
    img.setAttribute('src', img_src)
    img.setAttribute('height', '300px')
    img.setAttribute('width', '300px')
    img.setAttribute('border', '10px')
    divContainer.append(img)
  })
}

function listBreeds(data) {
  for (const breed in data) {
    const li = document.createElement('li')
    li.innerHTML = breed
    ul.append(li)
  }
}

function filterBreed() {
  const lis = document.querySelectorAll("li")
  dropdownOption.addEventListener("change", function(event) {
    lis.forEach((li) => {
      if (li.innerText[0] !== event.target.value) {
        li.style.display = "none";
      } else {
        resetList()
      }
    })
  })
}

function resetList() {
  const lis = document.querySelectorAll("li")
  dropdownOption.addEventListener("click", function(event) {
    lis.forEach((li) => {
      li.style.display = "list-item";
    })
  })
}

function createOptions() {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  alphabet.forEach((letter) => {
    const option = document.createElement("option")
    option.setAttribute("value", letter)  
    option.textContent = letter
    dropdownOption.append(option)
    console.log(option)
  })
}