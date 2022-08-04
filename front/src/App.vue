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

  <h1>Séminaire des doctorants IRIMAS</h1>

  <main>
    <router-view />
  </main>

  <footer>
    footer
  </footer>
</template>

<style scoped>

#navbar {
  padding: 10px;
  background-color: #333333!important;
  box-shadow: 0px 1px 10px black;
  z-index: 10!important;
}

#logo-irimas {
  width: 10%;
  margin-left: 5%;
}

.nav-item {
  font-weight: bold;
}

h1 {
  background-color: #386099;
  text-align: center;
  padding: 30px;
  color: white;
  font-size: 1.9em;
  box-shadow: 0px 1px 10px black;
}

main{
  padding: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
}

footer {
  padding: 10px;
  background-color: #333333!important;
  color: white;

}

@media (min-width: 1024px) {
  #logo-irimas {
    width: 40%;
  }

  main{
    padding-left: 15%;
    padding-right: 15%;
  }
}

</style>
