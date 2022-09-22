import { addInnerHTML, createElement } from "../homepage/functions";

let createContact = () => {

    createElement('#content', 'main', 'main');

    /* Create left section conetent */
    createElement('#main', 'section', 'left');
    createElement('#left', 'h2', 'contact-title');
    addInnerHTML('#contact-title', 'Contact and Hours');

    createElement('#left', 'div', 'contact-container');
    createElement('#contact-container', 'p', 'phone-number');
    addInnerHTML('#phone-number', 'Phone Number: 555.324.2346');

    createElement('#left', 'div', 'hours');
    createElement('#hours', 'p', 'weekday');
    addInnerHTML('#weekday', 'Mon - Fri: 1:00p.m. - 9:00p.m.')
    
    /* Create section right */
    createElement('#main', 'section', 'right');
    createElement('#right', 'img', 'kraken-img');
    document.querySelector('#kraken-img').src = '../dist/images/kraken.png';
}

export { createContact };