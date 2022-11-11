<template>
  <section v-if="AlgerianCitiesStore().cities">
    <ul class="list" v-if="AlgerianCitiesStore().cities">
      <CitiesListItem v-for="city in cities" :city="city" :key="city.fields.name" />
    </ul>
  </section>

</template>

<script setup>

import CitiesListItem from "./reusable/citiesListItem.vue";
import { AlgerianCitiesStore } from "~/store/AlgerianCitiesStore";
const cities = computed(() => AlgerianCitiesStore().cities);

</script>
<script>
export default {
  name: 'Cities',
}
</script>
<style scoped>
.list {
  margin-block: 3rem;
  margin-inline: 2rem;
  height: calc(100vh - 6rem);
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: repeat(16, 1fr);
  grid-auto-flow: column;
}
</style>