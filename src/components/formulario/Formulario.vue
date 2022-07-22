<template>
  <form @submit.prevent="salvarFormulario">
    <fieldset>
      <legend>{{ titulo }}</legend>
      <slot />

      <button type="button" @click="limparFormulario">Limpar</button>
      <button type="submit">Salvar</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: "Formulario",
  props: {
    titulo: {
      type: String,
      required: true,
    },
  },
  methods: {
    salvarFormulario() {
      this.$emit("salvarFormulario");
    },
    limparFormulario() {
      this.$emit("limparFormulario");
    },
  },
};
</script>

<style scope>
fieldset {
  border: 1px solid var(--background);
}
legend {
  color: var(--primary-darker);
  font-weight: bold;
}
form {
  max-width: 60%;
  margin: auto;
}
</style>