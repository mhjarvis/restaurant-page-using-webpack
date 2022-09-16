import { addInnerHTML, createElement } from "./functions";

const createMain = function () {
    console.log('dog')

createElement('#content', 'main', 'main');
createElement('main', 'img', 'kraken-image');
}


export { createMain };