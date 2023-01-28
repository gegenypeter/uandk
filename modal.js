window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  var modal = document.getElementById("myModal");

  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  var img4 = document.getElementById("img4");
  var img5 = document.getElementById("img5");
  var img6 = document.getElementById("img6");
  var img7 = document.getElementById("img7");
  var img8 = document.getElementById("img8");
  var img9 = document.getElementById("img9");
  var img10 = document.getElementById("img10");
  var img11 = document.getElementById("img11");

  var modalImg = document.getElementById("img01");

  var span = document.getElementsByClassName("close")[0];
  
  img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
  img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
  img3.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
  img4.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
  img5.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
  img6.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
  img7.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
  img8.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
  img9.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
  img10.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
  img11.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
  span.onclick = function() { 
    modal.style.display = "none";
  }
});
