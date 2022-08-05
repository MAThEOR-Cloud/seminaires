<script setup lang="ts">
import ContactModel from '@/models/ContactModel'
</script>

<script lang="ts">
export default {
  props: {
    contactModel: {
      type: ContactModel
    }
  }
}
</script>

<template>
  <div>
  	<b-card style="max-width: 20rem; min-width: 20rem; box-shadow: 0px 0px 2px #aaaaaa;">
      <template class="card-header" #header>
        <h4 class="mb-0">{{ contactModel?.name }}</h4>
      </template>
      <b-card-text>
        <img src="@/assets/people-fill.svg" style="margin-right: 5px;" /> {{ contactModel?.equip }}
      </b-card-text>
      <b-card-text>
        <img src="@/assets/envelope.svg" style="margin-right: 5px;" /> {{ contactModel?.mail }}
      </b-card-text>
    </b-card>
  </div>
</template>

<style scoped>

</style>