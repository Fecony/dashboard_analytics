import { createRouter, createWebHistory } from 'vue-router';
import ClientDashboard from '@/views/ClientDashboard.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: ClientDashboard,
        },
    ],
});

export default router;
