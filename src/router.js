import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [

]

const router = createRouter({
    history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router