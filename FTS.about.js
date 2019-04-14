var cards = document.querySelectorAll(".card");
var infoDiv = document.querySelector(".infoDiv");


// click event listeners for cards
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        displayInfoDiv();
    });
}



// && event.target.parentNode != box (to prevent box from being closed when user interacts with it)
window.addEventListener("mouseup", function (event) {
    if (event.target != infoDiv) {
        hideInfoDiv();
    }
});



// functions
function displayInfoDiv() {
    infoDiv.style.display = "inline-block";
}

function hideInfoDiv(){
    // opacity: 0;
    // animation: opac 0.8s;
    // infoDiv.style.opacity = "0";
    // infoDiv.style.animation = "opac 0.8s";
    infoDiv.style.display = "none";
}
