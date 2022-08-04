<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
//import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <b-navbar id="navbar" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">
        <img src="@/assets/logo-irimas.png" id="logo-irimas" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="nav-item" to="/">Accueil</b-nav-item>
          <b-nav-item class="nav-item" to="/schedule">Programme</b-nav-item>
          <b-nav-item class="nav-item" to="/advise">Conseils</b-nav-item>
          <b-nav-item class="nav-item" to="/access">Accès</b-nav-item>
          <b-nav-item class="nav-item" to="/contacts">Contacts</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

  <router-view />

</template>

<style scoped>

#navbar {
  padding: 10px;
  background-color: #333333!important;
}

#logo-irimas {
  width: 10%;
  margin-left: 5%;
}

.nav-item {
  font-weight: bold;
}

@media (min-width: 1024px) {
  #logo-irimas {
    width: 40%;
  }
}


</style>
