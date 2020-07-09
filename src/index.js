console.log('%c HI', 'color: firebrick')

const imgDiv = document.querySelector("#dog-image-container")
const dogBreedDiv = document.querySelector("#dog-breeds")

//first challenge 
// fetch("https://dog.ceo/api/breeds/image/random/4")
// .then(resp => resp.json())
// .then(resp => {
//     resp.message.forEach((item)=>{
//         let imgTag = document.createElement('img')
//         imgTag.setAttribute("src", item)
//        imgDiv.append(imgTag)
//     })
    
// })


//Second challenge 
// fetch('https://dog.ceo/api/breeds/list/all')
// .then(resp => resp.json())
// .then(resp => {
//    console.log(resp.message)
//     for(const breed in resp.message){
//         let liTag = document.createElement('li')
//         liTag.innerText = breed
//         dogBreedDiv.append(liTag)
//     }
// })


//Third challenge 
// fetch('https://dog.ceo/api/breeds/list/all')
// .then(resp => resp.json())
// .then(resp => {
//    console.log(resp.message)
//     for(const breed in resp.message){
//         let liTag = document.createElement('li')
//         liTag.innerText = breed
//         dogBreedDiv.append(liTag)

//         liTag.addEventListener('click', ()=>{
//             liTag.setAttribute("style", "color: red")
//         })
//     }
// })



//Fourth challenge 
function populateBreed(){
fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(resp => {
        for(const breed in resp.message){
            let liTag = document.createElement('li')
            liTag.innerText = breed
            dogBreedDiv.append(liTag)

            liTag.addEventListener('click', ()=>{
                liTag.setAttribute("style", "color: red")
            })
        }
    })
}
populateBreed();

let dropdown = document.querySelector("#breed-dropdown")

dropdown.addEventListener('change', (e) => {
    let list = dogBreedDiv.querySelectorAll('li')
    list.forEach(item => {
        if(item.innerText.charAt(0) !== e.target.value){
            item.remove()
        }
    })
});
