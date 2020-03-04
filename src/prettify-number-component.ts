/**
 * @file Implement little web component to show off the prettify number utility.
 */

import {html, LitElement, customElement, property} from "lit-element";
import {prettifyNumber} from "../prettify-number";

@customElement("prettify-number")
export class PrettifyNumber extends LitElement {
  @property() input: string = "";
  @property() output: string = "";

  render() {
    return html`
      <input type="text" .value=${this.input} @input=${this.handleInput} />
      <p style="font-size: larger; ">${this.output}</p>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.prettify();
  }

  prettify() {
    const value = this.input;

    this.output = value === "" ? "" : isNaN(+value) ? "Invalid input" : prettifyNumber(+value);
  }

  handleInput(event: any) {
    this.input = event.target.value;
    this.prettify();
  }
}
