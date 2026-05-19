import DemoPage from "@/views/DemoPage.vue"
import LoginPage from "@/views/LoginPage.vue"
import MainPage from "@/views/MainPage.vue"
import SignUpPage from "@/views/SignUpPage.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LoginPage,
            beforeEnter: (to, from, next) => {
                const token = localStorage.getItem('access_token')
                if (token) {
                    next('/main')
                } else {
                    next()
                }

            }
        },
        {
            path: '/demo',
            component: DemoPage
        },
        {
            path: '/signup',
            component: SignUpPage,
            beforeEnter: (to, from, next) => {
                const token = localStorage.getItem('access_token')
                if (token) {
                    next('/main')
                } else {
                    next()
                }

            }
        },
        {
            path: '/main',
            component: MainPage,
            beforeEnter: (to, from, next) => {
                const token = localStorage.getItem('access_token')
                if (token) {
                    next()
                } else {
                    next('/')
                }

            }
        }
    ]
})

export default router