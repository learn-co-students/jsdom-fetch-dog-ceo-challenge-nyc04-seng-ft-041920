console.log('%c HI', 'color: firebrick')
async function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImages(json.message));

}

function renderImages(images) {
    const imageDiv = document.querySelector('#dog-image-container')
    // find element to store the data in
        images.forEach(image => {
            const pic = document.createElement('div')
            let img = document.createElement('img')
            img.src = image
            // pic.innerHTML = `
            // <img src="${image}" />
            //
             pic.appendChild(img)
             
             imageDiv.appendChild(pic)
    })
    
    
}

async function fetchBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => renderBreeds(json.message));

}

function renderBreeds(breeds) {
    const breedUl = document.querySelector('#dog-breeds')
    // find element to store the data in
        for (const property in breeds) {
            
            let li = document.createElement('li')
            li.innerHTML = property
            
             breedUl.appendChild(li)
             
             
    }
    
    
}

document.addEventListener('DOMContentLoaded', function() {
     fetchImages() 
    fetchBreeds()
  })