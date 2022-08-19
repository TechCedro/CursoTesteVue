import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Cadastro from "../pages/cadastro/Cadastro.vue";
import Edicao from "../pages/edicao/Edicao.vue";
import Listagem from "../pages/listagem/Listagem.vue";

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
  }, {
    path: "/edicao",
    name: "Edição",
    component: Edicao,
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
