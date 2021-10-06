import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
  // load Vue.  Vue has its own mount fn, not related to ours
  const app = createApp(Dashboard);
  app.mount(el);
};

// If in dev and isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// If not, we must be in container, so export mount
export { mount };
