document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector("#hamburger");
  const list = document.getElementById("list");
  hamburger.addEventListener("click", () => {
    list.classList.toggle("list-active");
    hamburger.classList.toggle("hamburger-active");
  });
});

// document.addEventListener("DOMContentLoaded", () => {
//   const openMenu = document.getElementById("open-menu");
//   const menu = document.getElementById("menu");
//   openMenu.addEventListener("click", () => {
//     menu.classList.add("open-menu-active");
//     // menu.classList.remove("close-menu-active");
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const menu = document.getElementById("menu");
  openMenu.addEventListener("click", () => {
    menu.classList.add("open-menu-active");
    menu.classList.remove("close-menu-active");
  });
  closeMenu.addEventListener("click", () => {
    menu.classList.add("close-menu-active");
    menu.classList.remove("open-menu-active");
  });
});

// function hamburger() {
//   document.querySelector("#hamburger").classList.toggle("hamburger-active");
// }
