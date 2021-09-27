import faker from 'faker';

// let products = '';

// for (let i = 0; i < 5; i++) {
//   const name = faker.commerce.productName();
//   products += `<div>${name}</div>`;
// }

//console.log(products);
// This is ok, but what happens if the container team uses some other <div> name?
// Or it doesn't exist at all?
// document.querySelector('#dev-products').innerHTML = products;

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  // Adjust accordingly for your framework:
  el.innerHTML = products;
};

// Context/Situation #1
// Running file in dev in isolation
// Using local html file
// We know it has a dev-products ID
// Can render it right away.

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  if (el) {
    // Probably in dev. Could theoretically fail if
    // container has div with the same name, but
    // that should be handled in a team meeting.
    mount(el);
  }
}

// Sitch #2
// Running in container all
// No guarantee said element exists
// So we DO NOT want to render the app until we're sure it
// Has a place to go.

// Enter the MOUNT function
// Let's make it available to anything that wants
// to render this app
export { mount };
