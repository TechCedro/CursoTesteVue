<template>
  <div>
    <h1>Editar tarefa</h1>

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
      atividadeCarregada: false,
      atividade: {},
      erro: false,
    };
  },
  computed: {
    id() {
      return this.$route.params?.id;
    },
  },
  mounted() {
    if (this.id) {
      this.carregarAtividade();
    } else {
      this.$router.push({ name: "Edicao" });
    }
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