
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./components/Home.vue")
    },
    {
    path: "/about",
    name: "About",
    component: () => import("./components/About.vue")
    },
  ],
  mode: "history"
});

