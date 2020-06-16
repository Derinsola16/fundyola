import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/general/Home.vue")
  },
  {
    path: "/category",
    name: "category",
    component: () => import("../views/general/Category.vue")
  },
  {
    path: "/cart",
    name: "cart",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/general/Cart.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/general/Search.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/general/Profile.vue")
  },
  {
    path: "/sign-up",
    name: "register",
    component: () => import("../views/Auth/SignUp.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Auth/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
