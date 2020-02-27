import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-checkbox/paper-checkbox.js';

class CustomElement extends PolymerElement {
  static get properties() {
    return {
      mystring: {
        type: String,
        value: 'hello world'
      }
    };
  }
  static get template() {
    return html`
      <h1>i am a custom element</h1>
      <p>[[mystring]]</p>
      <paper-checkbox>can has paper-checkbox?</paper-checkbox>
    `;
  }

}

customElements.define('custom-element', CustomElement);