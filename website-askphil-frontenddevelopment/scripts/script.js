// Selecteert het <nav>-element binnen <header> van <body> en slaat dit op in de variabele 'hetMenu'
const hetMenu = document.querySelector("body header nav"); 


// Selecteert de <button> binnen <nav> en slaat dit op in de variabele 'menuButton'
const menuButton = document.querySelector("body header nav button");

// Voegt een klik-eventlistener toe aan de 'menuButton'
menuButton.addEventListener('click', toggleMenu);

// Definieert de functie 'toggleMenu' die wordt aangeroepen bij een klik op de 'menuButton'
function toggleMenu() {
  // Wisselt de klasse 'openMenu' aan of uit op het 'hetMenu'-element
  hetMenu.classList.toggle("openMenu"); 
  console.log("Menuknop ingeklikt!")
}



// Selecteert alle <li>-elementen binnen de vierde <section> van <main> en slaat deze op als een NodeList in 'listItems'
const listItems = document.querySelectorAll('main section:nth-of-type(4) ul li');

// Zorg dat de eerste <li> standaard actief is (als dit nog niet in de HTML staat)
listItems[0].classList.add('active');

// Loopt door elke <li> in 'listItems'
listItems.forEach((item) => {
  // Voegt een klik-eventlistener toe aan elk <li>-element
  item.addEventListener('click', () => {
    // Loopt opnieuw door alle <li>-elementen en verwijdert de klasse 'active'
    listItems.forEach((i) => i.classList.remove('active')); 
    
    // Voegt de klasse 'active' toe aan het aangeklikte <li>-element
    item.classList.add('active');
  });
});


