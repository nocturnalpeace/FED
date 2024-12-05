// JavaScript Document
const hetMenu = document.querySelector("body header nav");
const menuButton = document.querySelector("body header nav button");

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  hetMenu.classList.toggle("openMenu");
  console.log('het werkt')
}

//wrap every letter in a span 
var textWrapper =document.querySelector('.texteffect .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

AnimationTimeline.({loop:true})
  .add({
    targets: '.texteffect .letters',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.texteffect',
    opactiy: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });