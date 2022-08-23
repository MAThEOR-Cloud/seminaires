<script lang="ts">
import { defineComponent } from 'vue'
import SeminarCard from '@/components/SeminarCard.vue'
import type SeminarModel from '@/models/SeminarModel'
import SeminarService from '@/services/SeminarService'

export default defineComponent({
  components: {
    SeminarCard
  },
  data() {
    return {
      seminars: [] as SeminarModel[],
      seminarService: null as null | SeminarService,
    }
  },
	mounted () { 
		this.seminarService = new SeminarService()
		this.seminarService.getAll().then( (value: Array<SeminarModel>) => {
		  this.seminars = value
		});
	}
})
</script>

<template>
  <h1 id="title">Programme</h1>
  <main>
    <div>
  	  <SeminarCard v-for="seminar in seminars" :key="seminar.id" :seminarModel="seminar" />
  	</div>
  </main>
</template>

