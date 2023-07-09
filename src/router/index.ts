import AppLayout from "../components/layout/AppLayout.vue";
import { createRouter, createWebHistory, Router } from "vue-router";
import IndexView from "../views/IndexView.vue";

const router: Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("../views/login/LoginView.vue")
        },
        {
            path: "/",
            name: "home",
            component: AppLayout,
            children: [
                {
                    path: '',
                    component: IndexView
                },
                {
                    path: '/about',
                    name: "about",
                    // 懒加载 lazy-loaded 
                    component: () => import("../views/AboutView.vue")
                },
                {
                    path: '/:xxx(.*)*',
                    name: "ErrorPage",
                    component: () => import("../views/ErrorPage.vue")
                }
            ]
        }
    ]
})

export default router
