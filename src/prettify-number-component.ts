/**
 * @file Implement little web component to show off the prettify number utility.
 */

import {html, LitElement, customElement, property} from "lit-element";
import {prettifyNumber} from "../prettify-number";

@customElement("prettify-number")
export class PrettifyNumber extends LitElement {
  input: string = "";
  @property() output: string = "";

  render() {
    return html`
      <input type="text" .value=${this.input} @input=${this.handleInput} />
      <p style="font-size: larger; ">${this.output}</p>
    `;
  }

  handleInput(event: any) {
    const value = event.target.value;

    this.output = prettifyNumber(value);
  }
}
