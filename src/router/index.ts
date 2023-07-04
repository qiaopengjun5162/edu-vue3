import AppLayoutVue from "../components/layout/AppLayout.vue";
import { createRouter, createWebHistory, Router } from "vue-router";

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: AppLayoutVue
        }
    ]
})

export default router
