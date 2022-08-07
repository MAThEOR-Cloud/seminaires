<script setup lang="ts">
import SeminarModel from '@/models/SeminarModel'
</script>

<script lang="ts">
export default {
  props: {
    seminarModel: {
      type: SeminarModel
    }
  },
  methods: {
    parseTimestamp(timestamp: number) {
      let date = new Date(timestamp*1000)
      return this.formatDate(date)
    },

    padTo2Digits(num: number) {
      return num.toString().padStart(2, '0');
    },

    formatDate(date: Date) {
      return (
        [ 
          this.padTo2Digits(date.getDate()),
          this.padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join('/') +
        ' à ' +
        [
          this.padTo2Digits(date.getHours()),
          this.padTo2Digits(date.getMinutes()),
        ].join(':') + ' (UTC+2)'
      );
    },
  }
}
</script>


<template>
	<b-card class="seminar-card">
    <template class="card-header" #header>
      <h4 class="mb-0">{{ seminarModel?.title }}</h4>
    </template>
    <b-card-text>
      <img src="@/assets/calendar3.svg" style="margin-right: 5px;" /> {{ parseTimestamp(seminarModel?.date) }}
      <img src="@/assets/watch.svg" style="margin-right: 5px; margin-left: 10px;" /> {{ seminarModel?.duration }}min
    </b-card-text>
    <b-card-text>
      <img src="@/assets/person-fill.svg" style="margin-right: 5px;" /> {{ seminarModel?.author }}
      <img src="@/assets/envelope.svg" style="margin-right: 5px; margin-left: 10px;" /> {{ seminarModel?.mail }}
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
  box-shadow: 0px 0px 2px #aaaaaa;
  margin-bottom: 15px;
}

</style>