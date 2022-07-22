import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cadastro from "../views/cadastro/Cadastro.vue";
import Listagem from "../views/listagem/Listagem.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro,
  },
  {
    path: "/listagem",
    name: "Listagem",
    component: Listagem,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
