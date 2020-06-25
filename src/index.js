console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(){
  const imgContainer = document.querySelector("#dog-image-container")

  const breedSection = document.querySelector("#dog-breeds")
  const dropdownMenu = document.querySelector("#breed-dropdown")
  // let selection = dropdownMenu.value
  const dropdownOptions = document.querySelectorAll("option")

// load 4 images to DOM
  fetch(imgUrl)
  .then( response => response.json())
  .then(data => {
    for (const dogImage of data.message){
      imgContainer.innerHTML += `<img src=${dogImage}>`
    }
  })

  // fetch all dog breeds
  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    console.log(json.message)
    // put each breed on the DOM
    for (const breed in json.message){
      breedSection.innerHTML += `<li class="breed">${breed}</li>`
    }
    // change text color when clicked
    breedSection.addEventListener("click", event => {
      if (event.target.matches(".breed")){
        event.target.style = "color:purple"
      }
    })

    // filtering out breed based on selection
    console.log (dropdownMenu)
    dropdownMenu.addEventListener("change", function(event){
      let selection = dropdownMenu.value
      console.log(selection)
      const allBreeds = document.querySelectorAll(".breed")
      for (const breed of allBreeds){
  
        if (selection == "all"){
          breed.style ="display: block;"
        }
        else if (breed.textContent[0] == selection){
          breed.style ="display: block;"
        }
        else{
          breed.style ="display: none;"
        }
      }
    })

  })
})

