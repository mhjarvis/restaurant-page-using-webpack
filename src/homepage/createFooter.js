import { addInnerHTML, createElement } from "./functions";

const createFooter = () => {

    createElement('#content', 'footer', 'footer');
    createElement('#footer', 'h6', 'copyright');
    addInnerHTML('#copyright', '&#169; <a href="https://github.com/mhjarvis" id="github-link">mhjarvis</a> | 2022');
    
}

export { createFooter }