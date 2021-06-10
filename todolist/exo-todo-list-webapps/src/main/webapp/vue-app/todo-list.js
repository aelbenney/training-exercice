import './../css/main.less';

import TodoListApp from './components/TodoListApp.vue';

Vue.component('todo-list-app', TodoListApp);

Vue.use(Vuetify);

const vuetify = new Vuetify(eXo.env.portal.vuetifyPreset);

const appId = 'TodoListApp';
let TodoListApplication = '';

TodoListApplication = new Vue({
  template: `<todo-list-app id="${appId}" />`,
  vuetify
}).$mount(`#${appId}`);
