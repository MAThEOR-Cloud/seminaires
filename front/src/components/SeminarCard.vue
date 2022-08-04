<script setup lang="ts">

</script>

<template>
	<b-card class="seminar-card">
    <template class="card-header" #header>
      <h4 class="mb-0">Titre du séminaire</h4>
    </template>
    <b-card-text>
      Date et heure
    </b-card-text>
    <b-card-text>
      Auteur
    </b-card-text>
    <b-card-text>
      Equipe
    </b-card-text>
    <b-link href="#" class="card-link">Abstract</b-link>
    <b-link href="#" class="card-link">Slides</b-link>
  </b-card>
</template>

<style scoped>

.seminar-card {
  box-shadow: 0px 0px 5px #aaaaaa;
  margin-bottom: 15px;
}

</style>