import "./style.css";

class MyComponent extends HTMLElement{


  static get observedAttributes(){
    return ["name"];
  }

  render(){
    const name = this.getAttribute("name") ?? "";
    this.innerHTML = `<h2>Hello ${name}</h2>`;
  }

  connectedCallback(){
    this.render();
  }

  attributeChangedCallback(attr: any, old: any, newValue : any){
      console.table({ attr, old, newValue });
      this.render();
  }

}

window.customElements.define("x-js-show",MyComponent);
