import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login.vue";

import Store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      isAuthenticated: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isAuthenticated)) {
    if (!Store.state.auth.isAuth) {
      next({ name: "Login" });
    } else {
      next();
    }
  }
  next();
});

export default router;
