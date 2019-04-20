var arrow = document.querySelector("#arrowDown");
var how = document.querySelector(".how");
var cards = document.querySelectorAll(".cards");
var divs = document.querySelectorAll(".infoDiv");

var slideIndex = 1;
var divVisible = false;

// Scroll Arrow
arrowDown.addEventListener("click", function () {
    how.scrollIntoView();
});



// on click function for arrows
function changeSlides(n) {
    showSlides(slideIndex += n);
}

// on click function for loading info div based on which card was clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// animate in depending on which card or arrow was clicked (on click values for (n) are assigned via html onclick attributes)
function showSlides(n) {
    divs[slideIndex - 1].classList.remove("fadeOut");
    divs[slideIndex - 1].classList.add("fadeIn");
    divVisible = true;
}

// if mouse up event occurs on something that does not contain any of our infoDiv classes -> fadeOut
window.addEventListener("mouseup", function (event) {
    if (!event.target.classList.contains("infoDiv") && !event.target.classList.contains("divTitle")
    && !event.target.classList.contains("title") && !event.target.classList.contains("divContent")
    && !event.target.classList.contains("content")) {
        if (divVisible = true) {
            var i;
            for (i = 0; i < divs.length; i++) {
                divs[i].className = divs[i].className.replace("fadeIn", "fadeOut");
            }
        }

    }
});
