import './../css/main.less';

import TodoListApp from './components/TodoListApp.vue';

Vue.use(Vuetify);

const vueInstance = new Vue({
  el: '#TodoListApp',
  render: (h) => h(TodoListApp),
});
