window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    showSlides1()
  });

  let slideIndex1 = 1;
  showSlides1(slideIndex1);
  
  // Next/previous controls
  function plusSlides1(n) {
    showSlides1(slideIndex1 += n);
  }
  
  // Thumbnail image controls
  function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
  }
  
  function showSlides1(n) {
    let i;
    let slides = document.getElementsByClassName("smallImgContainer1");
    if (n > slides.length) {slideIndex1 = 1} 
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    slides[slideIndex1-1].style.display = "flex"; 
  }
  