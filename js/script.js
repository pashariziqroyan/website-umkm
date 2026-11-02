const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu-utama");

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  toggle.textContent = open ? "✕" : "☰";
  toggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
});