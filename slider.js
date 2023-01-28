window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    showSlides()
    showSlides1()
    showSlides2()
    showSlides3()
  });

let slideIndex = 1;
let slideIndex1 = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;
showSlides(slideIndex);
showSlides1(slideIndex1);
showSlides2(slideIndex2);
showSlides3(slideIndex3);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlides1(n1) {
  showSlides1(slideIndex1 += n1);
}
function plusSlides2(n2) {
  showSlides2(slideIndex2 += n2);
}
function plusSlides3(n3) {
  showSlides3(slideIndex3 += n3);
}

// Thumbnail image controls

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("smallImgContainer");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "flex"; 
};

function showSlides1(n1) {
  let i;
  let slides = document.getElementsByClassName("smallImgContainer1");
  if (n1 > slides.length) {slideIndex1 = 1} 
  if (n1 < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex1-1].style.display = "flex"; 
}
function showSlides2(n2) {
  let i;
  let slides = document.getElementsByClassName("smallImgContainer2");
  if (n2 > slides.length) {slideIndex2 = 1} 
  if (n2 < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex2-1].style.display = "flex"; 
}
function showSlides3(n3) {
  let i;
  let slides = document.getElementsByClassName("smallImgContainer3");
  if (n3 > slides.length) {slideIndex3 = 1} 
  if (n3 < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex3-1].style.display = "flex"; 
}

