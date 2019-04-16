var cards = document.querySelectorAll(".card");
var arrow = document.querySelector("#arrow");
var how = document.querySelector(".how");

var div0 = document.querySelector("#div0");
var divT = document.querySelector("#title");
var divC = document.querySelector("#content");


var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");

// Scroll Arrow
arrow.addEventListener("click", function(){
    how.scrollIntoView();
});



// Card Click Events

c1.addEventListener("click", function(){
    divT.textContent = "Create your own League";
    divC.textContent = "Friends That Smash allows you to create your own personal Super Smash Bros league. Use the built in tools to manage a league for your friends, co-workers, local members of your community!"
    div0.style.display = "inline-block";
});

c2.addEventListener("click", function(){
    divT.textContent = "Recruit Friends";
    divC.textContent = "Don't have anyone to smash with? Use the Smash Finder to find people to smash with! Recruit people to your league or challenge other leagues for an all out battle royale!"
    div0.style.display = "inline-block";
});

c3.addEventListener("click", function(){
    divT.textContent = "Organize a Tournament";
    divC.textContent = "Host and create your own internal tournaments! Automatically generate a battle roster & schedule matches or manually create the tournament yourself. Who will take home the gold?! Wombo Combo!"
    div0.style.display = "inline-block";
});




// Hide info Div if clicked outside of
// && event.target.parentNode != box (to prevent box from being closed when user interacts with it)
window.addEventListener("mouseup", function (event) {
    if (event.target != div0) {
        div0.style.display = "none"
    }
});


