import { addInnerHTML, createElement } from "../homepage/functions";

let createMenu = () => {

    createElement('#content', 'main', 'main');

    /* Create Menu content */
    createElement('#main', 'section', 'left');
    createElement('#left', 'h2', 'menu-title');
    addInnerHTML('#menu-title', 'Menu');

    /* Create menu items */
    createElement('#left', 'div', 'menu-container');
    createElement('#menu-container', 'p', 'menu-item-1');
    addInnerHTML('#menu-item-1', 'Octupus legs in ink gravy $88');

    createElement('#menu-container', 'p', 'menu-item-2');
    addInnerHTML('#menu-item-2', 'Squid live and kicking $88');

    createElement('#menu-container', 'p', 'menu-item-3');
    addInnerHTML('#menu-item-3', 'Shrimp dipped in ink cocktail sauce $88');

    /* Create section right */
    createElement('#main', 'section', 'right');
    createElement('#right', 'img', 'kraken-img');
    document.querySelector('#kraken-img').src = '../dist/images/kraken.png';
}


export { createMenu };