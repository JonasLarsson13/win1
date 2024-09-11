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

document.getElementById("faqs").addEventListener("click", async function (e) {
  const allElements = this.querySelectorAll("div");
  await allElements.forEach((element) => {
    if (element !== e.target.parentElement) {
      element.classList.remove("active");
    }
  });

  const divElement = e.target.parentElement;
  divElement.classList.toggle("active");
});

document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const nav = document.getElementById("small-devices-nav");
    nav.classList.toggle("active");

    this.classList.toggle("open");
  });
