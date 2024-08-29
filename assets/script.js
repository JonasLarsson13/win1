document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const divElement = this.querySelector("div");
  divElement.classList.toggle("dark");

  this.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header.navbar");

  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
