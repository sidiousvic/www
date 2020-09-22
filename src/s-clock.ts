import html from "./html";

class sClock extends HTMLElement {
  constructor() {
    super();
    this.styles();
    this.logic();
  }
  logic() {
    return setInterval(() => {
      this.innerHTML = this.time;
    }, 1000);
  }

  styles() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = html`
      <slot></slot>
      <style>
        :host {
          padding: 0 10px;
          color: whitesmoke;
          font-style: normal;
          margin-left: auto;
        }
      </style>
    `;
  }

  get time() {
    const dateOptions = {
      weekday: "long",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date()
      .toLocaleDateString("ja-JP", dateOptions)
      .toLocaleLowerCase();
  }
}

customElements.define("s-clock", sClock);
