/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-duplicates */
import { html, fixture, expect } from 'qing-t';
import '../dist/main.js';
import { MyCounter } from '../dist/main.js';

function verifyValue(el: MyCounter, val: number) {
  const valStr = `${val}`;
  expect(el.value).to.equal(val);
  expect(el.getAttribute('value')).to.equal(valStr);
  expect(el.shadowRoot!.getElementById('value-span')!.textContent).to.equal(valStr);
}

describe('MyElement', () => {
  it('Has a default value of 0', async () => {
    const el: MyCounter = await fixture(html` <my-counter></my-counter> `);
    verifyValue(el, 0);
  });

  it('Click +', async () => {
    const el: MyCounter = await fixture(html` <my-counter></my-counter> `);
    el.shadowRoot!.getElementById('inc-btn')!.click();
    verifyValue(el, 1);
  });

  it('Click -', async () => {
    const el: MyCounter = await fixture(html` <my-counter></my-counter> `);
    el.shadowRoot!.getElementById('dec-btn')!.click();
    verifyValue(el, -1);
  });

  it('Set value attribute', async () => {
    const el: MyCounter = await fixture(html` <my-counter></my-counter> `);
    el.setAttribute('value', '123');
    verifyValue(el, 123);
  });

  it('Set an initial attribute', async () => {
    const el: MyCounter = await fixture(html` <my-counter value="-17"></my-counter> `);
    verifyValue(el, -17);
  });
});
