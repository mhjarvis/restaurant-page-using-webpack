import { createFooter } from "./homepage/createFooter.js";
import { createHeader } from "./homepage/createHeader.js";
import { createMain } from "./homepage/createMain.js";
import { createMenu } from "./menu/createMenu.js";


createHeader();

//createMain();
createMenu();

createFooter();

const menu = document.getElementById('menu');
menu.addEventListener('click', function() {
    console.log("Hello");
});