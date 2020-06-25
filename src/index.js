console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let breeds = document.querySelector('ul#dog-breeds')

document.addEventListener("DOMContentLoaded", function(){
    // Dog Pictures
    // fetch(imgUrl)
    // .then(resp => resp.json())
    // .then(json => addDoggos(json));

    // Dog Breed
    fetch(breedUrl)
    .then(resp => resp.json())
    // .then(json => console.log(json));
    .then(json => addDoggoBreed(json));
});

function addDoggos(img){
    for(const images in img.message){
        let newImage = document.createElement('img');
          
        newImage.src = img.message[images];

        div = document.querySelector("div#dog-image-container");
        div.appendChild(newImage);
    }
}

function addDoggoBreed(doggo){
    let breeds = document.querySelector('ul#dog-breeds')
    
    for(const breed in doggo.message){
        // console.log(breed);
        let li = document.createElement('li');
        breeds.appendChild(li);
        li.innerText = `${breed}`;

        // Changes the color of the List item 
        li.addEventListener("click", function(e){
            changeTextColor(e)
        });
    }
}

function changeTextColor(x){
    if (x.target.style.color == 'red'){
        x.target.style.color = "black"
    }else{
        x.target.style.color = 'red';
    }
}
