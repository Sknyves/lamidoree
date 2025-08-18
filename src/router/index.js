import Gallery from "@/components/Gallery.vue";
import About from "@/views/About.vue";
import Accueil from "@/views/accueil.vue";
import Contact from "@/views/Contact.vue";
import Menu from "@/views/Menu.vue";
import Order from "@/views/Order.vue";
import Privacy from "@/views/Privacy.vue";
import Terms from "@/views/Terms.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'accueil',
        component: Accueil
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
         path: '/menu',
         name: 'menu',
         component: Menu
    },
    {
        path: '/gallery',
        name: 'gallery',
        component: Gallery
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/terms',
        name: 'terms',
        component: Terms
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: Privacy
    },
    {
        path: '/order',
        name: 'order',
        component: Order
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;