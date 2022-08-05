<script lang="ts">
import SeminarCard from '@/components/SeminarCard.vue'
import SeminarModel from '@/models/SeminarModel'
import SeminarService from '@/services/SeminarService'

export default {
  components: {
    SeminarCard
  },
  data() {
    return {
      seminars: Array<SeminarModel>,
      seminarService: SeminarService,
    }
  },
	mounted () { 
		this.seminarService = new SeminarService()
		this.seminarService.getAll().then(value => {
		  this.seminars = value
		});
		
	}
}
</script>

<template>
  <div>
	  <SeminarCard v-for="seminar in seminars" :key="seminar.id" :seminarModel="seminar" />
	</div>
</template>

