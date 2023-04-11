import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Products from "@/pages/Products.vue"
import ProductDetail from "@/pages/ProductDetail.vue"


const routes = [
    {
        path: "/",
        name: "Homepage",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/product",
        name: "Product",
        component: Products
    },
    {
        path: "/product/:id",
        name: "ProductDetail",
        component: ProductDetail
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router