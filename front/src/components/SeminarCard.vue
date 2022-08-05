<script setup lang="ts">
import SeminarModel from '@/models/SeminarModel'
</script>

<script lang="ts">
export default {
  props: {
    seminarModel: {
      type: SeminarModel
    }
  }
}
</script>


<template>
	<b-card class="seminar-card">
    <template class="card-header" #header>
      <h4 class="mb-0">{{ seminarModel?.title }}</h4>
    </template>
    <b-card-text>
      Date et {{ seminarModel?.hour }}h{{ seminarModel?.minutes }}
    </b-card-text>
    <b-card-text>
      {{ seminarModel?.author }}
    </b-card-text>
    <b-card-text>
      {{ seminarModel?.equip }}
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