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
    parseTimestamp(timestamp: number | undefined) {
      if ( timestamp) {
        let date = new Date(timestamp*1000)
        return this.formatDate(date)
      } else {
        return " "
      }
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
    <b-card-body class="card-body">
      <b-card-text style="display: flex;">
        <div style="width:50%;"><img src="@/assets/calendar3.svg" style="margin-right: 5px;" /> {{ parseTimestamp(seminarModel?.date) }}</div>
        <div style="width:50%;"><img src="@/assets/watch.svg" style="margin-right: 5px; margin-left: 10px;" /> {{ seminarModel?.duration }}min</div>
      </b-card-text>
      <b-card-text style="display: flex;">
        <div style="width:50%;"><img src="@/assets/person-fill.svg" style="margin-right: 5px;" /> {{ seminarModel?.author }}</div>
        <div style="width:50%;"><img src="@/assets/envelope.svg" style="margin-right: 5px; margin-left: 10px;" /> {{ seminarModel?.mail }}</div>
      </b-card-text>
      <b-card-text style="display: flex;">
        <img src="@/assets/people-fill.svg" style="margin-right: 5px;" /> {{ seminarModel?.equip }}
      </b-card-text>
      <b-card-text style="display: flex; justify-content: flex-end;">
        <b-link v-if="seminarModel?.abstract"
                :href="'/abstracts/'+seminarModel?.id+'.pdf'" target="_blank"
                class="card-link" >
                <img style="width: 32px;" src="@/assets/file-earmark-pdf.svg" />
        </b-link>
        <b-link v-if="seminarModel?.slides"
                :href="'/slides/'+seminarModel?.id+'.pdf'"  target="_blank"
                class="card-link">
                <img style="width: 32px;" src="@/assets/easel2.svg" />
        </b-link>
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<style scoped>

.seminar-card {
  box-shadow: 0px 0px 2px #aaaaaa;
  margin-bottom: 15px;
}

.card-body {
  padding: 0;
}

@media (min-width: 1024px) {
  .card-body {
    padding-right: 50px;
    padding-left: 50px;
  }
}


</style>