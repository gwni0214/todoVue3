import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';

import todoHeader from './pages/todoHeader.vue';
import todoInput from './pages/todoInput.vue';
import todoList from './pages/todoList.vue';
import todoFooter from './pages/todoFooter.vue';
Vue.config.productionTip = false;

//전역 컴포넌트
Vue.component('todoHeader', todoHeader);
Vue.component('todoInput', todoInput);
Vue.component('todoList', todoList);
Vue.component('todoFooter', todoFooter);
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
