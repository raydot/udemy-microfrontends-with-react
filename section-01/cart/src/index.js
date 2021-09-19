import faker from 'faker';

const fakerNumber = faker.random.number();
const outNoun = fakerNumber === 1 ? 'item' : 'items';
const cartText = `<div>You have ${fakerNumber} ${outNoun} in your cart.</div>`;

document.querySelector('#cart-dev').innerHTML = cartText;
