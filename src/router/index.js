import VueRouter from "vue-router";
import Vue from 'vue';
import homePage from "../pages/homePage.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: homePage
    },
]

const router = new VueRouter({
    routes,
    mode:"history"
});

export default router;