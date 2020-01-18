function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function topMenu() {
  const table = document.querySelector(".top-nav-menu")
  const openIcon = document.querySelector(".open-icon")
  const closeIcon = document.querySelector(".close-icon")
  table.classList.toggle("invisible")
  openIcon.classList.toggle("invisible")
  closeIcon.classList.toggle("invisible")
}