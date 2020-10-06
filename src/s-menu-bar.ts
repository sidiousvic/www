import "./s-clock";
import html from "./html";

class sMenuBar extends HTMLElement {
  constructor() {
    super();
    this.styles();
    this.innerHTML = this.innerHTML;
  }

  items: string[] = ["THIS WWWW IS UNDER CONSTRUCTION 🏴‍☠️ GITHUB/SIDIOUSVIC"];

  innerHTML = html`
    <div class="img" id="kermitoid-logo"></div>
    <div class="menu-item" id="os-title"><p>Sidi OS</p></div>
    ${this.items.map((item) => {
      return html`<div class="menu-item"><p>${item}</p></div>`;
    })}
    <s-clock>👽</s-clock>
  `;

  styles() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = html`
      <slot></slot>
      <style>
        :host {
          display: flex;
          justify-content: left;
          align-items: center;
          width: 100%;
          height: 40px;
          background: #111;
          z-index: 1;
        }

        #kermitoid-logo {
          height: 100%;
          image-rendering: pixelated;
          width: 40px;
          background-image: url("./assets/kermitoid_logo.png");
          background-size: cover;
          cursor: pointer;
        }

        #kermitoid-logo:hover {
          background-size: calc(140%);
        }

        .menu-item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 0 10px;
          color: whitesmoke;
          background: #111;
          cursor: pointer;
          font-style: italic;
        }

        .menu-item p {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin: 0;
          line-height: 100%;
        }

        #os-title {
          font-style: normal;
          font-weight: 500;
          font-size: 1.2em;
        }
      </style>
    `;
  }
}

customElements.define("s-menu-bar", sMenuBar);
