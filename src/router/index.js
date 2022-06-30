import VueRouter from "vue-router";
import Vue from 'vue';
import homePage from "../pages/homePage.vue";
import todoHeader from "../pages/todoHeader.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: homePage
    },
    {
        path: "/header",
        name: "header",
        component: todoHeader
    },
]

const router = new VueRouter({
    routes,
    mode:"history"
});

export default router;