<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <img class="nav-logo" src="./assets/logo.png">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse">
        
      </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item @click="startEvent" to="/">Login</b-nav-item>
          <b-nav-item @click="startEvent" to="/cadastro">Cadastro</b-nav-item>
          <b-nav-item @click="startEvent" to="/lista">Card</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
     
  },
}
</script>

<style>
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-logo {
  width: 30px;
}
</style>
