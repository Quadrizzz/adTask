let ad =  document.getElementById('ad');
const show_add = ()=>{
    setTimeout(()=>{
        ad.classList.add('visible')
    }, 2000)
}
window.addEventListener('load', show_add)

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("visible");
  }

//   slides[slideIndex-1].style.zIndex = "1";
  slides[slideIndex-1].classList.add('visible')
}