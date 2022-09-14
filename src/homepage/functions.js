function createElement(tagToGet, elementToCreate, id) {

    const getElement = document.querySelector(tagToGet);
    const element = document.createElement(elementToCreate);
    element.id = id;

    getElement.appendChild(element);

}

function addInnerHTML(tagToGet, contentToAdd) {
    const getElement = document.querySelector(tagToGet);
    getElement.innerHTML = contentToAdd;
}
export { createElement, addInnerHTML }