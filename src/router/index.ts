import AppLayout from "../components/layout/AppLayout.vue";
import { createRouter, createWebHistory, Router } from "vue-router";
import IndexView from "../views/IndexView.vue";
import { useTokenStore } from "../stores/mytoken";

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
            meta: { requiresAuth: true },
            children: [
                {
                    path: '',
                    name: 'IndexView',
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

router.beforeEach((to, from, next) => {
    console.log(from, "from");
    if (to.matched.some(r => r.meta?.requiresAuth)) {
        const store = useTokenStore()
        if (!store.token.access_token) {
            next({ name: "login", query: { redirect: to.fullPath } })
            return
        }
    }

    next()
})

export default router
