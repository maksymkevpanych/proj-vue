import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
import TestingPage from "../components/TestingPage.vue";
import CreateTest from "../components/CreateTest.vue";
import Login from "../components/Login.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/testing/:id",
    name: "TestingPage",
    component: TestingPage,
  },
  {
    path: "/create",
    name: "CreateTest",
    component: CreateTest,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: Login,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
