import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/Login.vue";
import Registration from "../pages/Registration.vue";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    redirect: {
      name: "Login",
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
