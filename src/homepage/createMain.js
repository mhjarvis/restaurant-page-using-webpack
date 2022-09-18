import { addInnerHTML, createElement } from "./functions";

const createMain = function () {
    console.log('dog')

createElement('#content', 'main', 'main');

createElement('#main', 'div', 'section-left');
createElement('#main', 'div', 'kraken-container');
createElement('#kraken-container', 'img', 'kraken-image');
}


export { createMain };