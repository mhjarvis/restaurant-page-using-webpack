import { addInnerHTML, createElement } from "./functions";

const createNavigation = function() {

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
    createElement('header', 'div', 'social-links')

    createElement('#social-links', 'img', 'facebook-link');
    const addFacebookImage = document.querySelector('#facebook-link');
    addFacebookImage.setAttribute('src', './images/facebook.png');

    createElement('#social-links', 'img', 'instagram-link');
    const addInstagramImage = document.querySelector('#instagram-link');
    addInstagramImage.setAttribute('src', './images/instagram.png');
}

export { createNavigation };