import { createRouter, createWebHashHistory } from "vue-router";
import Home from '/src/views/Home.vue'
import ProductCard from "../views/Cardprod.vue"
export const routers = createRouter ({
    history:createWebHashHistory(),
    routes:[
         {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: "/productCard/:id",
            name: "ProductCard",
            component: ProductCard,
          },
          
       
        {
            path: '/Productcards',
            name: 'Productcards',
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
        {
            path: '/Like',
            name: 'Like',
            component: () => import ('/src/views/Like.vue')
        },
        {
            path: '/Oformpr',
            name: 'Oformpr',
            component: () => import ('/src/views/Oformpr.vue')
        },
        {
            path: '/Likespr',
            name: 'Likespr',
            component: () => import ('../views/page/Likespr.vue')
        },
    ]
})