import { addInnerHTML, createElement } from "./functions";

let createMain = () => {

    createElement('#content', 'main', 'main');

    /* Create left section conetent */
    createElement('#main', 'section', 'left');
    createElement('#left', 'h2', 'slogan');
    addInnerHTML('#slogan', 'Seafood<br>Served Raw');
    createElement('#left', 'p', 'sub-title');
    addInnerHTML('#sub-title', 'Horrible tasting food.');

    /* Create section right */
    createElement('#main', 'section', 'right');
    createElement('#right', 'img', 'kraken-img');
    document.querySelector('#kraken-img').src = '../dist/images/kraken.png';
}

export { createMain };