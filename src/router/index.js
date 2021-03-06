import VueRouter from "vue-router";
import Vue from 'vue';
import homePage from "../pages/homePage.vue";
import todoHeader from "../pages/todoHeader.vue";
import todoInput from "../pages/todoInput.vue";
import todoList from "../pages/todoList.vue";
import todoFooter from "../pages/todoFooter.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/todoVue3",
        name: "home",
        component: homePage
    },
    {
        path: "/header",
        name: "header",
        component: todoHeader
    },
    {
        path: "/input",
        name: "input",
        component: todoInput
    },
    {
        path: "/list",
        name: "list",
        component: todoList
    },
    {
        path: "/footer",
        name: "footer",
        component: todoFooter
    },
]

const router = new VueRouter({
    routes,
    mode:"history"
});

export default router;