<template>
  <div>
    <h1>Cadastro</h1>

    <Formulario
      titulo="Novo comentário"
      @salvarFormulario="salvarComentario"
      @limparFormulario="limpar"
    >
      <label for="nome">Nome</label>
      <input
        type="text"
        name="nome"
        id="nome"
        v-model="comentario.nome"
        required
      />

      <label for="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        v-model="comentario.email"
        required
      />

      <label for="body">Comentário</label>
      <textarea
        type="text"
        name="body"
        id="body"
        v-model="comentario.body"
        required
      />
    </Formulario>
  </div>
</template>


<script>
import { salvar } from "../../service/cadastro/cadastro";
import Formulario from "../../components/formulario/Formulario.vue";
export default {
  name: "listagem",
  components: { Formulario },
  data() {
    return {
      comentario: {},
    };
  },
  methods: {
    async salvarComentario() {
      await salvar(this.comentario);
    },
    limpar() {
      this.comentario = {};
    },
  },
};
</script>

<style scoped>
input,
textarea {
  display: block;
  margin: auto;
}
button {
  margin-top: 15px;
}
</style>