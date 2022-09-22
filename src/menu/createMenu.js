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
    addInnerHTML('#menu-item-2', 'Squid - live and kicking $70');

    createElement('#menu-container', 'p', 'menu-item-3');
    addInnerHTML('#menu-item-3', 'Shrimp dipped in ink cocktail sauce $77');

    createElement('#menu-container', 'p', 'menu-item-4');
    addInnerHTML('#menu-item-4', 'Live shrimp with octopus jelly on toast $45');

    createElement('#menu-container', 'p', 'menu-item-5');
    addInnerHTML('#menu-item-5', 'Crap claws sauted in jellyfish $54');

    createElement('#menu-container', 'p', 'menu-item-6');
    addInnerHTML('#menu-item-6', 'Fish-eye Soup and tenticles $34');

    /* Create section right */
    createElement('#main', 'section', 'right');
    createElement('#right', 'img', 'kraken-img');
    document.querySelector('#kraken-img').src = '../dist/images/kraken.png';
}


export { createMenu };