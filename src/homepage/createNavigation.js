import { addInnerHTML, createElement } from "./functions";

const createNavigation = function() {

/*  
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    content.appendChild(header); 
    
    const getElement = document.querySelector(tag);
    const element = document.createElement(elementToCreate);
    element.id = id;

    getElement.appendChild(element);
*/

    // create Header element
    createElement('#content', 'header', 'header');

    // create Logo element
    createElement('header', 'span', 'brand');
    addInnerHTML('#brand', 'The Kraken');


    // create Navigation bar with link tags
    createElement('header', 'nav', 'navigation');

    createElement('#navigation', 'div', 'home');
    addInnerHTML('#home', 'Home');

    createElement('#navigation', 'div', 'menu');
    addInnerHTML('#menu', 'Menu');

    createElement('#navigation', 'div', 'about');
    addInnerHTML('#about', 'About');

    // create facebook/instagram buttons/links
    createElement('header', 'img', 'facebook-link');
    const addFacebookImage = document.querySelector('#facebook-link');
    addFacebookImage.setAttribute('src', './images/facebook.png');

    createElement('header', 'img', 'instagram-link');
    const addInstagramImage = document.querySelector('#instagram-link');
    addInstagramImage.setAttribute('src', './images/instagram.png');
}

export { createNavigation };