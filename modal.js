window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  var modal = document.getElementById("myModal");

  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var img3 = document.getElementById("img3");
  var img4 = document.getElementById("img4");

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
  span.onclick = function() { 
    modal.style.display = "none";
  }
});
