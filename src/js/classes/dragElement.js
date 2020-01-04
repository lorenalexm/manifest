export default class DragElement {
    constructor() {
      this._createElement = this._createElement.bind(this);
      this._element = this._createElement();
    }
  
    /*
          Get / Set methods
      */
  
    get element() {
      return this._element;
    };
  
    /*
          Private methods
    */
    
    _createElement() {
        const el = document.createElement("div");
        el.classList.add("dragHandle");
      
        return el;
    };
  
    /*
          Public methods
      */
  
    appendChild(childElement) {
      this._element.appendChild(childElement);
    };
  };
  