var cards = document.querySelectorAll(".card");
var infoDiv1 = document.querySelector("#div1");
var infoDiv2 = document.querySelector("#div2");
var infoDiv3 = document.querySelector("#div3");


var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");


c1.addEventListener("click", function(){
    infoDiv1.style.display = "inline-block";
});

c2.addEventListener("click", function(){
    infoDiv2.style.display = "inline-block";
});

c3.addEventListener("click", function(){
    infoDiv3.style.display = "inline-block";
});


function hideInfoDiv() {
    infoDiv1.style.display = "none";
    infoDiv2.style.display = "none";
    infoDiv3.style.display = "none";
}



// Hide info Div if clicked outside of
// && event.target.parentNode != box (to prevent box from being closed when user interacts with it)
window.addEventListener("mouseup", function (event) {
    if (event.target != infoDiv1 && event.target != infoDiv2 && event.target != infoDiv3) {
        hideInfoDiv();
    }
});
