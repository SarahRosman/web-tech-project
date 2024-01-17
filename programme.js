//slideIndex: Keeps track of the current slide being displayed. It starts at 0.
var slideIndex = 0;
showSlides();
var slides,dots;

//display slide and update slide index
//it will check i exceeds total num o slide then back to 0
function showSlides() {
    //hide all slides
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    //update slide index
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    //update slide index and dot
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

//for button previous and next
//takes paraemter postion 1=next slide snd -1 = previous slide
//ensure slide back to first slide 
//update display and dot to current active
function plusSlides(position) {
    //update slide index
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    //update active slides and dot
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
//if user click on dots to navigate to spesic slide
//it takes parameter index that represent the desired slide index
//ensure provided index within valid range and n update slide n dot (active)
function currentSlide(index) {
    //ensure index is within valid range
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    //hide all slides
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //update active slide and dot
    slides[index-1].style.display = "block";  
    dots[index-1].className += " active";
}

