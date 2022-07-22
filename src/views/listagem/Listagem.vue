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
            return dado.name.first + " " + dado.name.last;
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
      resposta: [],
    };
  },
  computed: {
    filtros() {
      return this.$store.getters.filtros;
    },
  },

  watch: {
    filtros() {
      this.dados = this.resposta.filter((dado) => {
        return this.aplicarFiltros(dado);
      });
    },
  },
  mounted() {
    this.carregarUsuarios();
  },
  methods: {
    aplicarFiltros(dado) {
      const _filtros = {
        temNome: false,
        temIdade: false,
        temEmail: false,
        temPais: false,
      };
      if (!this.filtros) {
        return true;
      }
      if (this.filtros?.nome) {
        _filtros.temNome =
          (dado.name.first + dado.name.last).indexOf(this.filtros.nome) > -1;
      }

      if (this.filtros?.idade) {
        _filtros.temIdade = dado.dob.age == this.filtros.idade;
      }

      if (this.filtros?.email) {
        _filtros.temEmail = dado.email.indexOf(this.filtros.email) > -1;
      }

      if (this.filtros?.pais) {
        _filtros.temPais = dado.location.country == this.filtros.pais;
      }
      return (
        _filtros.temNome ||
        _filtros.temIdade ||
        _filtros.temEmail ||
        _filtros.temPais
      );
    },
    async carregarUsuarios() {
      const resposta = await listarUsuarios();
      this.resposta = resposta.data.results;
      this.dados = this.resposta.filter((dado) => {
        return this.aplicarFiltros(dado);
      });
    },
  },
};
</script>
