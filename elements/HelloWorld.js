import { LitElement, html, customElement, property } from "lit-element";

class HelloWorld extends LitElement {
  static get properties() {
    return {
      name: {type: String}
    }
  }

  constructor() {
    super();
    this.name = "World"
  }

  render() {
    return html`
      <h1>Hello ${this.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vel atque eos, voluptates suscipit totam debitis, tenetur iure nesciunt sunt expedita reprehenderit nihil aspernatur quaerat saepe sapiente et vero natus!</p>
    `
  }
}

customElements.define("hello-world", HelloWorld)