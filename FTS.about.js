var slideIndex = 1;
var arrow = document.querySelector("#arrowDown");
var how = document.querySelector(".how");
var cards = document.querySelectorAll(".cards");
var divs = document.querySelectorAll(".infoDiv");
var divVisible = false;

// Scroll Arrow
arrowDown.addEventListener("click", function () {
    how.scrollIntoView();
});


// showSlides(slideIndex);

function changeSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    divs[slideIndex -1].classList.remove("fadeOut");
    divs[slideIndex - 1].classList.add("fadeIn");
    divVisible = true;
}

// && event.target.parentNode != box (to prevent box from being closed when user interacts with it)
window.addEventListener("mouseup", function (event) {
    if (event.target.className !== 'infoDiv') {
        if (divVisible = true) {
            var i;
            for (i = 0; i < divs.length; i++) {
                divs[i].className = divs[i].className.replace("fadeIn", "fadeOut");
            }
        }

    }
});
