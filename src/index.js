console.log('%c HI', 'color: firebrick') 
//DOM
let breedsList;


function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/5";
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
  }



function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    return fetch(breedUrl)
      .then(resp => resp.json())
      .then(json => renderBreeds(json));
  }
  
  function renderImages(images) {
    let container = document.getElementById('dog-image-container');
    images.message.forEach (image => {
      let doggo_image = document.createElement('img')
      doggo_image.src = `${image}`
      container.appendChild(doggo_image)
    });
  }
  

  function renderBreeds(json) {
    breedsList = Object.keys(json.message)
    filterBreeds(breedsList)
  }
  

  function listBreed(filteredBreeds) {
    let list = document.getElementById('dog-breeds');
    list.innerHTML = '';
    filteredBreeds.forEach(dog => {
      let doggo_breed = document.createElement('li')
      doggo_breed.textContent = `${dog}`
      doggo_breed.addEventListener('click', changeColor)
      list.appendChild(doggo_breed)
    });
  }
  
  function filterBreeds(breeds) {
    console.log(breeds)
    let dropdown = document.getElementById('breed-dropdown');
    let list = document.getElementById('dog-breeds');
    dropdown.addEventListener('change', function() {
      let filtered = breeds.filter(breed => breed[0] === dropdown.value);
      listBreed(filtered);
    })
  }
  
  function changeColor(e) {
    e.target.style.color = "pink";
  }
  