import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/users",
      name: "users",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Users.vue"),
    },
    {
      path: "/user/:id",
      name: "user",
      component: () => import("../views/User.vue"),
      props: true
    }
  ],
});

export default router;
