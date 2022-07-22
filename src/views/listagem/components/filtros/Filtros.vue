<template>
  <Formulario
    titulo="Filtros"
    @salvarFormulario="salvarFiltro"
    @limparFormulario="limpar"
  >
    <input type="text" placeholder="Nome" v-model="nome" />
    <input type="number" placeholder="Idade" v-model="idade" />
    <input type="email" placeholder="E-mail" v-model="email" />
    <input type="text" placeholder="Pais" v-model="pais" />
  </Formulario>
</template>

<script>
import Formulario from "../../../../components/formulario/Formulario.vue";

export default {
  name: "Filtros",
  components: { Formulario },
  methods: {
    salvarFiltro() {},
    limpar() {},
  },
};
</script>

<style scoped>
::v-deep input {
  margin-left: 4px;
}
</style>