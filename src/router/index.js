import { createRouter, createWebHistory } from "vue-router";
import AddUser from '../user/AddUser.vue';
import EditUser from '../user/EditUser.vue';
import ListUser from '../user/ListUser.vue';

const routes = [
    {
        path: '/',
        component: ListUser,
    },
    {
        path: '/add-user',
        component: AddUser,
    },
    {
        path: '/user-edit/:id',
        component: EditUser,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;