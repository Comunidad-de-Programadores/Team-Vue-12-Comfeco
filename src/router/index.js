import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ReinicioContraseña from "../views/ReinicioContraseña.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { requiresAuth: true },
    component: Home
  },
  {
    path: "/Login",
    name: "Login",
    meta: { notRequiresAuth: true },
    component: Login
  },
  {
    path: "/Register",
    name: "Register",
    meta: { notRequiresAuth: true },
    component: Register
  },
  {
    path: "/Reset",
    name: "Reset",
    meta: { notRequiresAuth: true },
    component: ReinicioContraseña
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/politicas-privacidad",
    name: "PoliticasPrivacidad",
    meta: { notRequiresAuth: true },
    component: () => import("../views/PoliciesComfeco.vue")
  },
  {
    path: "/comunidades",
    name: "Comunidades",
    meta: { requiresAuth: true },
    component: () => import("../views/Communities.vue")
  },
  {
    path: "/perfil-usuario",
    name: "ProfileUser",
    meta: { requiresAuth: true },
    component: () => import("../views/ProfileUser.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("isAuth");

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next("/login");
    return;
  }
  if (to.matched.some(record => record.meta.notRequiresAuth) && loggedIn) {
    next("/");
    return;
  }
  next();
});
