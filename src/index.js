import { createFooter } from "./homepage/createFooter";
import { createHeader } from "./homepage/createHeader";
import { createMain } from "./homepage/createMain"
import { createMenu } from "./menu/createMenu"

createHeader();
createMain();
createFooter();
addListeners();


function addListeners() {

    const home = document.getElementById('home');
        home.addEventListener('click', function() {
        resetContent();
        createHeader();
        createMain();
        createFooter();
        addListeners();
    })

    const menu = document.getElementById('menu');
        menu.addEventListener('click', function() {
        resetContent();
        createHeader();
        createMenu();
        createFooter();
        addListeners();

    })

    const contact = document.getElementById('contact');
        contact.addEventListener('click', function() {
        resetContent();
        createHeader();
        createMain();
    //    creteContact();
        createFooter();
        addListeners();
    })
}



function resetContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}