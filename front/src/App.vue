<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <b-navbar id="navbar" toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/" style="flex: 1;">
        <img src="@/assets/logo-irimas.png" id="logo-irimas" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav >
        <b-navbar-nav id="navbar-nav">
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
    copyright la mère d'Armand
  </footer>
</template>

<style scoped>

#navbar {
  padding: 10px;
  background-color: #333333!important;
  box-shadow: 0px 1px 10px black;
  z-index: 10!important;
  display: flex;
}

#logo-irimas {
  width: 80%;
}

#navbar-nav {
  flex: auto;
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
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
  flex: auto;
}

footer {
  padding: 10px;
  background-color: #333333!important;
  color: white;
  text-align: center;
}

@media (min-width: 1024px) {
  #logo-irimas {
    width: 60%;
  }

  main{
    padding-left: 15%;
    padding-right: 15%;
  }
}

</style>
