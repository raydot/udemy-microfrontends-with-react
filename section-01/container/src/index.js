// Not import statement but import function call
// This loads modules asynchronously.
import('./bootstrap');

// This file gets everything ready for bootstrap to load
// and guarantees that the productsIndex called by bootstrap
// will be available at go time.
