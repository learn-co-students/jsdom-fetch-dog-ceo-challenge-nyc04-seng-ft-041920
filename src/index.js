console.log('%c HI', 'color: firebrick')

let url2 = "https://dog.ceo/api/breeds/image/random/4"

function fetchDog(url2) {
    fetch(url2)
        .then(response => response.json())
        .then(json => {
            for (let i in json["message"]) {
                container = document.getElementById('dog-image-container')
                img = document.createElement("img")
                img.src = json["message"][i]
                container.appendChild(img)
            }
        })
};

fetchDog(url2)

let url = 'https://dog.ceo/api/breeds/list/all'

function fetchBreed(url) {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            breeds = Object.keys(response.message)
            ul = document.getElementById("dog-breeds")
            document.body.appendChild(ul)
            for (let i of breeds) {
                li = document.createElement("li")
                ul.appendChild(li)
                li.innerHTML = i
            }
        })
    setColor()
}

fetchBreed(url)





function filterBreed() {

    let sel7 = document.getElementById("breed-dropdown")
    sel7.addEventListener("change", filterBreed)
    lis = document.querySelectorAll('li')
    let selectedVal = sel7.value
    for (let i = 0; i < lis.length; i++) {
        if (lis[i].innerText[0] !== selectedVal) {
            lis[i].style.display = "none"
            filtered = true
        }
    }
    setColor()
}


function resetFilter() {
    let sel8 = document.getElementById("breed-dropdown")
    sel8.addEventListener("click", resetFilter)
    lis = document.querySelectorAll('li')
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.display = "list-item"
    }
    setColor()
}


function setColor() {
    let lis = document.querySelectorAll('li')
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener("click", () => lis[i].style.color = "green")
    }
}




