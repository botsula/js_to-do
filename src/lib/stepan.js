
export default class Stepan {



  static checkElement(element) {
    return element instanceof HTMLDocument || element instanceof Element;
  }

  static createElement(element, parent, attributes = {}) {

    function isValid(input) {
      return document.createElement(input).toString() != "[object HTMLUnknownElement]";
    }

    // TODO: check if this is a valid tag name
    if(!isValid(element)) this.StepanError.NotValidTag;



    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    

    return newElement;
  }




  static Component = class {
    constructor(parent) {


      // 2. throw an error if parent is null or undefined, or if it's not a valid DOM object
      if (parent === null || parent === undefined) {
        StepanError.NullParentError()
      }
      if (!Stepan.checkElement(parent)) {
        StepanError.NotValidDOM();
      }




      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }

}


      // TODO: 1. Create StepanError class to define all framework errors
Stepan.StepanError = class {

  static NullParentError() {
    throw 'Parent is null or undefined.'
  }

  static NotValidDOM(){
    throw 'Not a valid DOM object'
  }

  static NotValidTag(){
    throw 'Element name is not valid tag.'
  }
}
