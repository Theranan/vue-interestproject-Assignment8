import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import About from '../pages/About.vue'
import Projects from "../pages/Projects.vue"

const routes = [{
    path: "/",
    component: Home,
    name: "Home",
},{
    path: "/About",
    component: About,
    name: "About",
},{
    path: "/Projects",
    component: Projects,
    name: "Projects",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveclass: "active",
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth'
            };
        }
        return { x:0, y: 0 }; 
    },
    routes,
});

export default router;