// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogList = document.querySelector('#dog-image-container');
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogBreedList = document.querySelector('#dog-breeds');
const dropDownMenu = document.querySelector("#breed-dropdown");

    console.log("The DOM has loaded")
    // image fetch
    fetch (imgUrl)
        .then(response => response.json())
        .then(json => renderAllDogs(json))
    //image render
    function renderAllDogs(dogArr){

        for (i = 0; i < dogArr["message"].length; i++){
            const img = document.createElement('img')
            img.setAttribute('src', dogArr["message"][i])
            img.setAttribute('height', '400px')
            img.setAttribute('width', '300px')
            dogList.append(img)
        }
    }

    //dog breed fetch
    fetch(breedUrl)
        .then(response => response.json())
        .then(dogBreeds => renderAllDogBreeds(dogBreeds))

    //render single dog
    function renderDogBreed(breed){
        const li = document.createElement("li")
            li.innerHTML = breed
            dogBreedList.append(li)

            li.addEventListener("click", () => {
                li.setAttribute("class", "breedColor")
            })
    }

    //render all dog breeds
    function renderAllDogBreeds(dogBreedArr){
        for (const breed in dogBreedArr["message"]){
         renderDogBreed(breed)
        }
        //dog breed filter
        dropDownMenu.addEventListener('input', (e) => {
            renderAllDogBreeds(dogBreedArr)
            const filterLetter = document.querySelectorAll("li")
            filterLetter.forEach((li) => {
                if (li.innerText[0] != e.target.value){
                    li.remove()
                }
            });
        })

    }
    