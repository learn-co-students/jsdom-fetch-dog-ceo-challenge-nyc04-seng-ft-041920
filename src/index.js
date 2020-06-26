window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    console.log('%c HI', 'color: firebrick')

    getImgApi()
    getBreedApi()
    

})
let breeds = []

function getImgApi(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log(json)
      json.message.forEach(msg => { 
        addImg(msg)
      });
    })
}

function addImg(msg){
  const imgList = document.querySelector('#dog-image-container')
  let img = document.createElement('img')      
  img.src = msg
  imgList.appendChild(img)
}

function getBreedApi(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(response => response.json())
    .then(function(json) {
      console.log(json.message)
      
      const breed = Object.keys(json.message)
      breeds = breed
      breed.forEach(breed => { 
        addBreed(breed)
      }); 
      
    })
}

function addBreed(breed){
  const breedList = document.querySelector('#dog-breeds')
  let li = document.createElement('li')
  li.innerText = breed
  li.addEventListener('click', e => e.target.style.color = "red")
  breedList.appendChild(li)
}

const filterList = document.querySelector('#breed-dropdown')
filterList.addEventListener('change', e => {
  console.log(e.target.value)
  const newBreeds = filterBreed(e.target.value)
  updateBreed(newBreeds)
})

function filterBreed(letter){
  const filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
  return filteredBreeds
}

function updateBreed(newBreeds){
  const breedList = document.querySelector('#dog-breeds')
  //debugger
  // breedList.innerHTML = ""	
  while ( breedList.firstChild ) {
    breedList.removeChild( breedList.firstChild );
  }
  
  newBreeds.forEach(breed => { 
    let li = document.createElement('li')
    li.innerText = breed
    li.addEventListener('click', e => e.target.style.color = "red")
    breedList.appendChild(li)
  }); 
  
}