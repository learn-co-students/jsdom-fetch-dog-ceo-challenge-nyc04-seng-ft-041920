
let breeds = []

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    /** get data from api and add images to window */
    getApi(imgUrl).then(data => addImg(data))

    /**get data from api and add <li> of breed*/
    getApi(breedUrl).then(breed => {
      //Create an array of keys from breeds json data
      // and save it into breeds array
      breeds = Object.keys(breed)
      addBreed(breeds)
    })

    /**get <select> from document*/
    const filterList = document.querySelector('#breed-dropdown')
    /**add event listener for change of <select>*/
    filterList.addEventListener('change', e => {
      const newBreeds = filterBreed(e.target.value)
      addBreed(newBreeds)
    })



})


/**
 * function that returns json.message 
 * with passed in url parameter 
 */
function getApi(url){
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      // debugger
      // console.log(json.message)
      return json.message
    })
}

/**
 * function that returns json.message 
 * with passed in url parameter 
 */

function addImg(msg){
  msg.forEach(imgSrc => { 
    const imgList = document.querySelector('#dog-image-container')
    let img = document.createElement('img')  
    img.src = imgSrc
    imgList.appendChild(img)
  });   
  
}

function addBreed(breeds){
  /**remove all <li> from <ul>*/
  const breedList = document.querySelector('#dog-breeds')
  // breedList.innerHTML = ""	
  while ( breedList.firstChild ) {
    breedList.removeChild( breedList.firstChild );
  }
  breeds.forEach(breed => { 
    addBreedList(breed)
  }); 
}

function addBreedList(breed){
  //get ul#dog-breeds and add <li> of each breed
  const breedList = document.querySelector('#dog-breeds')
  let li = document.createElement('li')
  li.innerText = breed
  li.addEventListener('click', e => e.target.style.color = "red")
  breedList.appendChild(li)
}

function filterBreed(letter){
  // debugger
  console.log(breeds)
  const filteredBreeds = breeds.filter(breed => breed.startsWith(letter))
  console.log(filteredBreeds)
  return filteredBreeds
}