const imgs = [
    "images/animal1.jpg",
    "images/animal2.jpg",
    "images/animal3.jpg"
]
const containerEl = document.getElementById("container")

function renderImages(img) {
    let imgsDOM = ""
    for (let i = 0; i < img.length; i++) {
        imgsDOM += `<img alt="Animals" class="team-img" src="${img[i]}">`
    }
    containerEl.innerHTML = imgsDOM
}
renderImages(imgs)

// <img class="team-img" src="">