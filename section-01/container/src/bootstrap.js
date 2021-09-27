// Works in conjunction with the "products" KVP in webpack config
// to pull in localhost:8081

// Also works with webpack.config to "expose" ./src/index
// Useful if you need to expose multiple routes & such.
// Also makes for some sweet aliasing

// import 'products/ProductsIndex'
// import 'cart/CartShow';

// Mount works with the app to make handle application
// rendering context
import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('CONTAINER!');

productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));
