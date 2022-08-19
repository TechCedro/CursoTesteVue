<template>
  <div>
    <h1>Edição</h1>
    <label for="nome">ID da Atividade</label>
    <input
      type="number"
      name="id"
      id="id"
      v-model="id"
      required
      @keydown.enter="carregarAtividade"
    />
  </div>
</template>


<script>
export default {
  name: "edicao",
  data() {
    return {
      id: null,
    };
  },
  methods: {
    async carregarAtividade() {
      this.$router.push({ name: "Tarefa", params: { id: this.id } });
    },
  },
};
</script>

<style scoped>
input {
  display: block;
  margin: auto;
}
button {
  margin-top: 15px;
}

.alerta {
  color: crimson;
  border: 1px solid crimson;
  padding: 8px 12px;
  margin: 8px 12px;
}
</style>