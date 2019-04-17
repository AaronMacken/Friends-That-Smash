var cards = document.querySelectorAll(".card");
var arrow = document.querySelector("#arrowDown");
var how = document.querySelector(".how");

var div0 = document.querySelector("#div0");
var divT = document.querySelector("#title");
var divC = document.querySelector("#content");


var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");

var divVisible = false;

// Scroll Arrow
arrowDown.addEventListener("click", function () {
    how.scrollIntoView();
});



// Card Click Events

c1.addEventListener("click", function () {
    divT.textContent = "Create your own League";
    divC.textContent = "Friends That Smash allows you to create your own personal Super Smash Bros league. Use the built in tools to manage a league for your friends, co-workers, local members of your community!"
    fadeIn();
});

c2.addEventListener("click", function () {
    divT.textContent = "Recruit Friends";
    divC.textContent = "Don't have anyone to smash with? Use the Smash Finder to find people to smash with! Recruit people to your league or challenge other leagues for an all out battle royale!"
    fadeIn();
});

c3.addEventListener("click", function () {
    divT.textContent = "Organize a Tournament";
    divC.textContent = "Host and create your own internal tournaments! Automatically generate a battle roster & schedule matches or manually create the tournament yourself. Who will take home the gold?! Wombo Combo!"
    fadeIn();
});


// Hide info Div if clicked outside of
// && event.target.parentNode != box (to prevent box from being closed when user interacts with it)
window.addEventListener("mouseup", function (event) {
    if (divVisible) {
        if (event.target != div0) {
            fadeOut();
        }
    }
});

function fadeIn() {
    div0.classList.remove("fadeOut");
    div0.classList.add("fadeIn");
    divVisible = true;
}
function fadeOut() {
    div0.classList.remove("fadeIn");
    div0.classList.add("fadeOut");
    divVisible = false;
}


