import { HotModuleReplacementPlugin } from "webpack";
import { createFooter } from "./homepage/createFooter.js";
import { createHeader } from "./homepage/createHeader.js";
import { createMain } from "./homepage/createMain.js";
import { createMenu } from "./menu/createMenu.js";


createHeader();
createMain();
/* createMenu();
 */
createFooter();
/* 
const home = document.getElementById('home');
home.addEventListener('click', function() {
    console.log("welcome");
})

const menu = document.getElementById('menu');
menu.addEventListener('click', function() {
    console.log("Hello");
});

const contact = document.getElementById('contact');
contact.addEventListener('click', function() {
    console.log("howdy");
})

 */