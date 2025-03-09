import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import AdminLayout from '@/Layouts/AdminLayout.vue';

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob('./Pages/**/*.vue');
    return pages[`./Pages/${name}.vue`]().then((module) => {
      module.default.layout = module.default.layout || AdminLayout;
      return module;
    });
  },
  setup({ el, App, props }) {
    createApp({ render: () => h(App, props) }).mount(el);
  },
});
