<template>
  <Formulario
    titulo="Filtros"
    @salvarFormulario="salvarFiltro"
    @limparFormulario="limpar"
  >
    <input type="text" placeholder="Nome" v-model="nome" />
    <input type="number" placeholder="Idade" v-model="idade" />
    <input type="text" placeholder="E-mail" v-model="email" />
    <input type="text" placeholder="Pais" v-model="pais" />
  </Formulario>
</template>

<script>
import Formulario from "../../../../components/formulario/Formulario.vue";

export default {
  name: "Filtros",
  components: { Formulario },
  data() {
    return {
      nome: "",
      idade: "",
      email: "",
      pais: "",
    };
  },
  methods: {
    salvarFiltro() {
      this.$store.dispatch("salvarFiltros", {
        nome: this.nome,
        idade: this.idade,
        email: this.email,
        pais: this.pais,
      });
    },
    limpar() {
      this.$store.dispatch("limparFiltros");
    },
  },
  computed: {
    filtros() {
      return this.$store.getters.filtros;
    },
  },
  watch: {
    filtros() {
      this.nome = this.filtros?.nome || null;
      this.idade = this.filtros?.idade || null;
      this.email = this.filtros?.email || null;
      this.pais = this.filtros?.pais || null;
    },
  },
  mounted() {
    if (this.filtros) {
      this.nome = this.filtros.nome;
      this.idade = this.filtros.idade;
      this.email = this.filtros.email;
      this.pais = this.filtros.pais;
    }
  },
};
</script>

<style scoped>
::v-deep input {
  margin-left: 4px;
}
</style>