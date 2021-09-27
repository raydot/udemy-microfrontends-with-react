import faker from 'faker';

const mount = (el) => {
  const fakerNumber = faker.datatype.number();
  const outNoun = fakerNumber === 1 ? 'item' : 'items';
  const cartText = `<div>You have ${fakerNumber} ${outNoun} in your cart.</div>`;

  // document.querySelector('#cart-dev').innerHTML = cartText;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-dev');

  if (el) {
    mount(el);
  }
}

export { mount };
