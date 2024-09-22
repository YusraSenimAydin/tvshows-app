import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ShowDetails from "../views/ShowDetails.vue";
import HighRated from "../views/HighRated.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/show/:id",
    name: "ShowDetails",
    component: ShowDetails,
    props: true,
  },
  {
    path: "/high-rated",
    name: "HighRated",
    component: HighRated,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
