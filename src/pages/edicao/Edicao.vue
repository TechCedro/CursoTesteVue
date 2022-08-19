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

    <div class="alerta" v-if="id && erro">
      Não encontramos a atividade {{ id }}
    </div>

    <Formulario
      v-if="atividadeCarregada"
      titulo="Editar Atividade"
      @salvarFormulario="editarAtividade"
      @limparFormulario="limpar"
    >
      <label for="nome">Atividade</label>
      <input
        type="text"
        name="titulo"
        id="titulo"
        v-model="atividade.title"
        required
      />

      <label for="email">Finalizada</label>
      <input
        type="checkbox"
        name="finalizada"
        id="finalizada"
        v-model="atividade.completed"
        required
      />
    </Formulario>
  </div>
</template>


<script>
import { carregar, editar } from "../../service/edicao/edicao";
import Formulario from "../../components/formulario/Formulario.vue";
export default {
  name: "edicao",
  components: { Formulario },
  data() {
    return {
      id: null,
      atividadeCarregada: false,
      atividade: {},
      erro: false,
    };
  },
  methods: {
    async editarAtividade() {
      try {
        await editar(this.id, this.atividade);
        alert("Editado com sucesso");
      } catch (err) {
        alert("Problemas ao editar");
      }
    },
    async carregarAtividade() {
      if (!this.id) return;

      this.atividade = {};
      this.atividadeCarregada = false;
      this.erro = false;
      try {
        const resposta = await carregar(this.id);
        this.atividade = resposta.data;
        this.atividadeCarregada = true;
      } catch (Erro) {
        this.erro = true;
      }
    },
    limpar() {
      this.atividade = {};
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