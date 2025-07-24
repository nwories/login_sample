const openMenu = document.querySelector(".menu-btn");
const menuLinks = document.querySelector(".links");
const mobileOverlay = document.querySelector(".mobile-overlay");

function openNav() {
   if (!menuLinks.classList.contains("menu-link")) {
     menuLinks.classList.add("menu-link");
     openMenu.innerHTML = "&times;";
     openMenu.style.fontSize = "4.5rem"
     mobileOverlay.style.display = "block"
   } else {
    menuLinks.classList.remove("menu-link")
    openMenu.innerHTML = "&#9776;"
     openMenu.style.fontSize = "2.5rem"
     mobileOverlay.style.display = "none"
   }
};
openMenu.addEventListener("click", openNav)


