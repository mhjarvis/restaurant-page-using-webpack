function createElement(tag, elementToCreate, id) {

    const getElement = document.querySelector(tag);
    const element = document.createElement(elementToCreate);
    element.id = id;

    getElement.appendChild(element);

}

export { createElement }