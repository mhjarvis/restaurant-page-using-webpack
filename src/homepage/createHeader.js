import { addInnerHTML, createElement } from "./functions";

const createHeader = function() {

    /* Create header containing element */
    createElement('#content', 'header', 'header');

    /* Create Logo */
    createElement('#header', 'span', 'brand');       
    addInnerHTML('#brand', 'The Kraken');

    /* Create Nav bar and contents */
    createElement('#header', 'nav', 'nav');

    createElement('#nav', 'p', 'home');
    addInnerHTML('#home', 'Home');
    createElement('#nav', 'p', 'menu');
    addInnerHTML('#menu', 'Menu');
    createElement('#nav', 'p', 'contact');
    addInnerHTML('#contact', 'Contact');

    /* Create social media section */
    createElement('#header', 'div', 'social-media');
    createElement('#social-media', 'img', 'facebook');
    document.getElementById('facebook').src = 'https://github.com/mhjarvis/restaurant-page-using-webpack/blob/main/dist/images/facebook.png?raw=true';
    createElement('#social-media', 'img', 'instagram');
    document.getElementById('instagram').src = 'https://github.com/mhjarvis/restaurant-page-using-webpack/blob/main/dist/images/instagram.png?raw=true';
}

export { createHeader };