import { createElement } from "./functions";

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

    // create Navigation bar with link tags
    createElement('header', 'nav', 'navigation');

    createElement('navigation', 'div', 'home');
    createElement('navigation', 'div', 'menu');
    createElement('navigation', 'div', 'about');

    // create facebook/instagram buttons/links
    createElement('header', 'img', 'facebook-link');
    createElement('header', 'img', 'instagram-link');
}

export { createNavigation };