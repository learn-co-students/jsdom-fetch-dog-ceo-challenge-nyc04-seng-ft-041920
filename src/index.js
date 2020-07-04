///3rd time 
//7/4/2020 Saturday 11:16 - 

//challenge 1
//image 
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
let imgLoc = document.querySelector("#dog-image-container")

fetch(imgUrl)
  .then(resp => resp.json())
  .then(data => {
  data.message.forEach(eachImgUrl => {
      addImg(eachImgUrl)
    })
  })

  function addImg(eachImgUrl){
    let imgHolder = document.createElement("img")
    imgHolder.src = eachImgUrl
    imgLoc.appendChild(imgHolder)
  }


  //12:39 - 1:04
  //challenge 2
  // breed name 
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dogBreed = document.querySelector("#dog-breeds")


  fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {

        //key dog
        Object.keys(data.message).forEach(eachDog => {
        let eachDogHolder = document.createElement('li')
        eachDogHolder.innerHTML = eachDog
        nameToThePage(eachDogHolder)

        //val dog
        let val = data.message[eachDog]
        if (val.length !== 0){
          val.forEach(eachVal =>{
          eachDogHolder.innerHTML = eachVal
         // console.log(`val!!${eachDogHolder.innerHTML}`)
          nameToThePage(eachDogHolder)
        })
        }
      })
      })


//2:04 - 2:30
//3:03 - 
//challenge 4 //move on!
// organize names

const breedDropdown = document.querySelector("#breed-dropdown")
const dropALabel = breedDropdown.options[0].label
console.log(dropALabel)

function nameToThePage(dogNameLi){
  //console.log(dogNameLi)
  //console.log(dogNameLi.innerHTML)
  let dogName = dogNameLi.innerHTML
  let firstLet = dogName[0]
  if(firstLet === "a"){
    console.log(dogNameLi)
    //dropALable.innerHTML.append(dogNameLi)
  }
  //console.log(firstLet)
  dogBreed.append(dogNameLi)



  //color
  dogNameLi.addEventListener("click", color)
}

//challenge 3
//1:04 - 1:32 color the clicked name
function color (e){
  e.target.style.color = "red"
}




// fetch(imgUrl)
//   .then(resp => resp.json())
//   .then(data => {
//     data.message.forEach(eachImg => {
//       addImage(eachImg)
//     })
// })

// function addImage(eachImg){
//   let newImgEl = document.createElement('img')
//   newImgEl.src = eachImg
//   imgLoc.appendChild(newImgEl)
// }





// console.log('%c HI', 'color: firebrick')

// // ## Challenge 1

// // This repository includes an `index.html` file that loads an `index.js` file.

// // ```js
// // const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// // ```

// // Add JavaScript so that:

// // - on page load
// // - fetch the images using the url above ⬆️
// // - parse the response as `JSON`
// // - add image elements to the DOM **for each**🤔 image in the array

// document.addEventListener('DOMContentLoaded', function(){
//     loadImages();
//     loadBreedOptions();
// })

// //console.log('about to fetch an img')

// // fetch(img_url)
// //     .then(response => {
// //     return response.json()
// //     }).then(json => {
// //         console.log(json)

// //         document.getElementById('dog-image-container').src = URL.createObjectURL(json)
// //     })

// function loadImages(){
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

//     fetch(imgUrl)
//     .then (response => {
//         return response.json()})
//     .then(result => {
//         //console.log(json)
//         //console.log('sending to callback func, addImage(dogPicUrl')
//         result.message.forEach(image => addImage(image))//each img, the API img address is array. nested element of the array is an image url. call back func.
//         //console.log('YESS callback done, Fetch done')
// })
// }

// function addImage(dogPicUrl){ //call back func
//     let containter = document.getElementById('dog-image-container')
//     let newImageEl = document.createElement('img')
//     newImageEl.src = dogPicUrl
//     containter.appendChild(newImageEl)
// }

// /////////////////////


// // ## Challenge 2

// // ```js
// // const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// // ```

// // - on page load, fetch all the dog breeds using the url above ⬆️
// // - add the breeds to the page in an `<ul>` (take a look at the included `index.html`)

// //////////////
// let breeds = []
// console.log('about to fetchText')

// const loadBreedOptions = () => {
//     console.log('fetch2 dog breed')
//     fetch('https://dog.ceo/api/breeds/list/all')
//         .then(response => {
//         console.log(`:::response.json ${response.json()}::::::`)})
//         .then(results => {
//             breeds = Object.keys(results.message)
//             console.log(`::::breeds:::${breeds}`)
//             updateBreedList(breeds);
//             addBreedSelectListener();
//         })
// }

// const updateBreedList = (breeds) => {
//     console.log(`updateBreedList loading`)
//     const ul = document.querySelector('#dog-breeds')
//     removeChildren(ul)
//     breeds.forEach(breed => addBreed(breed))
// }

// const removeChildren = (element) => {
//     console.log(`removeChildren loading`)
//     let child = element.lastElementChild;
//     while (child) {
//         element.removeChild(child)
//         child = element.lastElementChild
//     }
// }

// function selectBreedsStartingWith(letter){
//     updateBreedList(breeds.filter(breed => breed.startWith(letter)))
// }

// function addBreedSelectListener() {
//     let breedDropdown = document.querySelector('#breed-dropdown');
//     breedDropdown.addEventListener('change', function (event) {
//       selectBreedsStartingWith(event.target.value);
//     });
//   }


//   function addBreed(breed) {
//     let ul = document.querySelector('#dog-breeds');
//     let li = document.createElement('li');
//     li.innerText = breed;
//     li.style.cursor = 'pointer';
//     ul.appendChild(li);
//     li.addEventListener('click', updateColor);
//   }
  
//   function updateColor(event) {
//     event.target.style.color = 'palevioletred';
//   }



// // ## Challenge 3

// // Once all of the breeds are rendered in the `<ul>`, add JavaScript so that the
// // font color of a particular `<li>` changes _on click_. This can be a color of
// // your choosing.

// // When the user clicks any of the dog breed list items, the color the text should
// // change.

// //////////

// // ## Challenge 4

// // Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// // so that the user can filter breeds that start with a particular letter using a
// // dropdown.

// // For example, if the user selects 'a' in the dropdown, only show the breeds with
// // names that start with the letter a. For simplicity, the dropdown only includes
// // the letters a-d. However, we can imagine expanding this to include the entire
// // alphabet






// /////solution
// let breeds = [];

// document.addEventListener('DOMContentLoaded', function () {
//   loadImages();
//   loadBreedOptions();
// });

// function loadImages() {
//   const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//   fetch(imgUrl)
//     .then(res=> res.json())
//     .then(results => {
//       results.message.forEach(image => addImage(image))
//     });
// }

// function addImage(dogPicUrl) {
//   let container = document.querySelector('#dog-image-container');
//   let newImageEl = document.createElement('img');
//   newImageEl.src = dogPicUrl;
//   container.appendChild(newImageEl);
// }

// function loadBreedOptions() {
//   const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//   fetch(breedUrl)
//     .then(res => res.json())
//     .then(results => {

//       breeds = Object.keys(results.message);
//       updateBreedList(breeds);
//       addBreedSelectListener();
//     });
// }

// function updateBreedList(breeds) {
//   let ul = document.querySelector('#dog-breeds');
//   removeChildren(ul);
//   breeds.forEach(breed => addBreed(breed));
// }

// function removeChildren(element) {
//   let child = element.lastElementChild;
//   while (child) {
//     element.removeChild(child);
//     child = element.lastElementChild;
//   }
// }

// function selectBreedsStartingWith(letter) {
//   updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
//   //filter: condition 
//   //.startsWith: if the first letter 
// }

// function addBreedSelectListener() {
//   let breedDropdown = document.querySelector('#breed-dropdown');
//   breedDropdown.addEventListener('change', function (event) { //event listener if change
//     selectBreedsStartingWith(event.target.value);
//   });
// }

// function addBreed(breed) {
//   let ul = document.querySelector('#dog-breeds');
//   let li = document.createElement('li');
//   li.innerText = breed;
//   li.style.cursor = 'pointer';
//   ul.appendChild(li);
//   li.addEventListener('click', updateColor);
// }

// function updateColor(event) {
//   event.target.style.color = 'palevioletred';
// }