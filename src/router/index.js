import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/teams",
    name: "teams",
    component: () =>
      import(/* webpackChunkName: "teams" */ "@/views/Teams.vue"),
  },
  {
    path: "/teams/:id",
    name: "team",
    component: () =>
      import(/* webpackChunkName: "teams" */ "@/views/Team.vue"),
  },
  {
    path: "/stats",
    name: "stats",
    component: () =>
      import(/* webpackChunkName: "teams" */ "@/views/Stats.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () =>
      import(/* webpackChunkName: "teams" */ "@/views/News.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },  
});

export default router;
