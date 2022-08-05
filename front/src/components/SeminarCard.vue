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
      <img src="@/assets/calendar3.svg" style="margin-right: 5px;" /> 05/07/2022 à {{ seminarModel?.hour }}h{{ seminarModel?.minutes }}
    </b-card-text>
    <b-card-text>
      <img src="@/assets/person-fill.svg" style="margin-right: 5px;" /> {{ seminarModel?.author }}
    </b-card-text>
    <b-card-text>
      <img src="@/assets/people-fill.svg" style="margin-right: 5px;" /> {{ seminarModel?.equip }}
    </b-card-text>
    <b-link href="#" class="card-link"><img style="width: 32px;" src="@/assets/file-earmark-pdf.svg" /></b-link>
    <b-link href="#" class="card-link"><img style="width: 32px;" src="@/assets/easel2.svg" /></b-link>
  </b-card>
</template>

<style scoped>

.seminar-card {
  box-shadow: 0px 0px 5px #aaaaaa;
  margin-bottom: 15px;
}

</style>