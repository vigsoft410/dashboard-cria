<template>
  <div id="app">
    <Login />
    <CadastroUsuario />
  </div>
</template>

<script>
import CadastroUsuario from './components/Cadastro-usuario.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    CadastroUsuario, Login 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
