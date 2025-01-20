// JavaScript Document
const hetMenu = document.querySelector("body header nav");
const menuButton = document.querySelector("body header nav button");

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  hetMenu.classList.toggle("openMenu");
  console.log('het werkt')
}