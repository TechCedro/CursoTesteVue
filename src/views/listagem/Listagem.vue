<template>
  <div>
    <h1>Listagem</h1>
    <Filtros />
    <hr />
    <Tabela :colunas="colunas" :dados="dados" />
  </div>
</template>

<script>
import Tabela from "../../components/tabela/Tabela.vue";
import { listarUsuarios } from "../../service/listagem/listagem";
import Filtros from "./components/filtros/Filtros.vue";

export default {
  name: "listagem",
  components: { Tabela, Filtros },
  data() {
    return {
      colunas: [
        {
          prop: "nome",
          formatar: (dado) => {
            return dado.name.first + dado.name.last;
          },
          texto: "Nome",
        },
        {
          prop: "idade",
          texto: "Idade",
          formatar: (dado) => {
            return dado.dob.age;
          },
        },
        {
          prop: "email",
          texto: "E-mail",
        },
        {
          prop: "cell",
          texto: "Celular",
        },
        {
          prop: "pais",
          formatar: (dado) => {
            return dado.location.country;
          },
          texto: "Pais",
        },
      ],
      dados: [],
    };
  },
  mounted() {
    this.carregarUsuarios();
  },
  methods: {
    async carregarUsuarios() {
      const resposta = await listarUsuarios();
      this.dados = resposta.data.results;
    },
  },
};
</script>
