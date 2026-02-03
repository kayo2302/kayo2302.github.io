const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("open");
});

menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});
