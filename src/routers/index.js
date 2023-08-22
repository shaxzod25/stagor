import { createRouter, createWebHashHistory } from "vue-router";
import Home from '/src/views/Home.vue'
export const routers = createRouter ({
    history:createWebHashHistory(),
    routes:[
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Productcard',
            name: 'Productcard',
            component: () => import ('/src/views/Productcard.vue')
        },
        {
            path: '/Paymentanddelivery',
            name: 'Paymentanddelivery',
            component: () => import ('/src/views/Paymentanddelivery.vue')
        },
        {
            path: '/Contacts',
            name: 'Contacts',
            component: () => import ('/src/views/Contacts.vue')
        },
    ]
})