import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/Login.vue";
import Registration from "../pages/Registration.vue";
import Home from "../pages/Home.vue";
import UserPage from "../pages/UserPage.vue";

const routes = [
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
  {
    path: "/userPage",
    name: "UserPage",
    component: UserPage
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
