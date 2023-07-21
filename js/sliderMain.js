/* SLIDER MAIN */
let responsiveSlider = function() {

    let slider = document.getElementById("sliderMain");
    let sliderWidth = slider.offsetWidth;
    let slideList = document.getElementById("slideImages");
    let count = 1;
    let items = slideList.querySelectorAll("li").length;
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");
    
    window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
    });
    
let prevSlide = function() {
    if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
    }
    else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
    }
    };
    
let nextSlide = function() {
    if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
    }
    else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
    }
    };
    
    next.addEventListener("click", function() {
    nextSlide();
    });
    
    prev.addEventListener("click", function() {
    prevSlide();
    });
    
    setInterval(function() {
    nextSlide()
    }, 8000);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    }


/* SLIDER PRODUCTOS*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("slideProd");
let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}