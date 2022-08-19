import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filtrosSalvos: {},
  },
  mutations: {
    salvarFiltros(state, filtros) {
      state.filtrosSalvos = filtros;
    },
  },
  getters: {
    filtros: (state) => {
      return state.filtrosSalvos;
    },
  },
  actions: {
    salvarFiltros(context, novoFiltro) {
      context.commit("salvarFiltros", novoFiltro);
    },
    limparFiltros(context) {
      context.commit("salvarFiltros", {});
    },
  },
  modules: {},
});
