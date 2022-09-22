import { createFooter } from "./homepage/createFooter";
import { createHeader } from "./homepage/createHeader";
import { createMain } from "./homepage/createMain";
import { createMenu } from "./menu/createMenu";
import { createContact } from "./contact/createContact";

createHeader();
createContact();
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
        createContact();
        createFooter();
        addListeners();
    })
}



function resetContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}