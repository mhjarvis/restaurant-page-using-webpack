import { addInnerHTML, createElement } from "./functions";

const createMain = function () {
    console.log('dog')

createElement('body', 'main', 'main');
createElement('#content', 'img', 'kraken-image');
}


export { createMain };