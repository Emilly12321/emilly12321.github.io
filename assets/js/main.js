

document.getElementById("contact-form").addEventListener("submit", function () {
  location.reload();
});


window.addEventListener("scroll", () => {
  const seta = document.getElementById("seta");

  if (window.scrollY > 100) {
    seta.style.display = "flex";
  } else {
    seta.style.display = "none";
  }
});