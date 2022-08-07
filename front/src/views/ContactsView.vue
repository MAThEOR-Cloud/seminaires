<script setup lang="ts">
import { defineComponent } from 'vue'
import ContactCard from '@/components/ContactCard.vue'
import type ContactModel from '@/models/ContactModel'
</script>

<script lang="ts">
export default defineComponent({
  components: {
    ContactCard
  },
  data() {
    return {
      contacts: [] as ContactModel[],
      coordinator: { id: 1, name: "Armand Ley", equip: "Mathématiques", mail: "armand.ley@uha.fr" } as ContactModel,
      loading: true,
    }
  },
	mounted () { 
		this.contacts = [
			{ id: 1, name: "Kerima Saleh Abakar", equip: "RT", mail: "kerima-saleh.abakar@uha.fr" },
			{ id: 2, name: "Gautier Pialla", equip: "MSD", mail: "gautier.pialla@uha.fr" },
			{ id: 6, name: "Riadh Abbessi", equip: "IMTI", mail: "riadh.abbessi@uha.fr" },
			{ id: 3, name: "", equip: "MIAM", mail: "" },
			{ id: 4, name: "", equip: "FOTI", mail: "" },
			{ id: 5, name: "", equip: "OMEGA", mail: "" },
		]
		this.loading = false;
	}
})
</script>

<template>
  <h2 style="margin-bottom: 20px;">Coordinateur</h2>
  <b-card-group deck>
	  <ContactCard v-if="!loading" :contactModel="coordinator" />
	</b-card-group>

  <h2 style="margin-bottom: 20px; margin-top: 20px; ">Responsables d'équipe</h2>
  <b-card-group deck>
  	<ContactCard v-for="contact in contacts" :key="contact.id" :contactModel="contact" />
	</b-card-group>
</template>
