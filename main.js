//get/fetch a photos from .json file
async function getPhotos(){
    let response = await fetch('photos.json')
    let photos = await response.json()
    return photos
     
}
//render all photos from .json file
getPhotos().then(photos => {
    let myPhotosHtml = photos.map(photo =>{
        return `<img src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`
    }).join("")
    console.log(myPhotosHtml)
//create a div with all photos inside
    document.body.innerHTML = `
    <div class="my-photos">${myPhotosHtml}</div>
    `
})

