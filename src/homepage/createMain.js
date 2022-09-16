import { addInnerHTML, createElement } from "./functions";

const createMain = function () {
    console.log('dog')

createElement('#content', 'main', 'main');
createElement('html', 'img', 'kraken-image');
}


export { createMain };