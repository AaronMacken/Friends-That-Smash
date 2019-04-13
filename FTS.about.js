var cards = document.querySelectorAll(".card");
var infoDiv = document.querySelector(".infoDiv");

// Display info Div
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        infoDiv.style.display = "inline-block";
    });
}

window.addEventListener("mouseup", function(event){
    if(event.target != infoDiv){
        infoDiv.style.display = "none";
    }
});



