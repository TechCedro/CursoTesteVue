<template>
  <table>
    <thead>
      <tr>
        <th :key="coluna.prop" v-for="coluna in colunas">{{ coluna.texto }}</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="index" v-for="(dado, index) in dados">
        <td :key="coluna.prop" v-for="coluna in colunas">
          {{ valorColuna(coluna, dado) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "tabela",
  props: {
    colunas: {
      required: true,
    },
    dados: {
      type: Array,
      required: true,
    },
  },
  methods: {
    valorColuna(coluna, dado) {
      return coluna.formatar ? coluna.formatar(dado) : dado[coluna.prop];
    },
  },
};
</script>

<style scoped>
table {
  margin: auto;
}
thead,
th {
  background: var(--secondary);
  padding: 8px
}
</style>