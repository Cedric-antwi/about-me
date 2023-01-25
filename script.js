const favouriteBtn = document.getElementById("favourite")
const inputDisplay = document.getElementById("input-display")
const postBtn = document.getElementById("post")
const interestList = document.getElementById("interests")
let isFavourited = false

function toggleFavouriteBtn() {
    if (isFavourited === false){
        favouriteBtn.innerHTML =`Favourited <i class="fa-solid fa-heart red"></i>`

        isFavourited = true
    } else if (isFavourited === true){
        favouriteBtn.innerHTML =`Favourite <i class="fa-regular fa-heart"></i>`
        isFavourited = false
    }
}

function postToUser() {
    alert(inputDisplay.value)
}

