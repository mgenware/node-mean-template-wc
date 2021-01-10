const template = document.createElement('template');
template.innerHTML = `
  <style>
    span {
      margin: 1rem;
      font-size: 2rem;
    }

    button {
      background-color: navy;
      color: white;
    }
  </style>
  <button id="dec-btn">-</button>
  <span id="value-span"></span>
  <button id="inc-btn">+</button>`;

const valueAttr = 'value';
export class MyCounter extends HTMLElement {
  static get observedAttributes() {
    return [valueAttr];
  }

  get value(): number {
    return this.#value;
  }

  set value(v: number) {
    this.#value = v;
    const valueStr = `${v}`;
    this.#valueSpan.textContent = valueStr;
    if (valueStr !== this.getAttribute(valueAttr)) {
      this.setAttribute(valueAttr, valueStr);
    }
  }

  #decBtn: HTMLButtonElement;
  #incBtn: HTMLButtonElement;
  #valueSpan: HTMLSpanElement;
  #value = -1;
  #sr: ShadowRoot;

  constructor() {
    super();

    const sr = this.attachShadow({ mode: 'open' });
    sr.appendChild(template.content.cloneNode(true));
    this.#sr = sr;

    this.#decBtn = this.mustGetElementByID('dec-btn');
    this.#incBtn = this.mustGetElementByID('inc-btn');
    this.#valueSpan = this.mustGetElementByID('value-span');

    this.#decBtn.addEventListener('click', () => {
      this.value--;
    });

    this.#incBtn.addEventListener('click', () => {
      this.value++;
    });
  }

  connectedCallback() {
    // Sync attribute to property.
    this.setValueString(this.getAttribute(valueAttr));
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    if (name === valueAttr) {
      this.setValueString(newValue);
    }
  }

  private mustGetElementByID<T extends HTMLElement>(id: string): T {
    const element = this.#sr.getElementById(id);
    if (!element) {
      throw new Error(`Element "${id}" is not found`);
    }
    return element as T;
  }

  private setValueString(str: string | null) {
    this.value = parseInt(str || '', 10) || 0;
  }
}

customElements.define('my-counter', MyCounter);
