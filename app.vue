<template>
  <NuxtPage />

</template>
<script setup>

import { AlgerianCitiesStore } from './store/AlgerianCitiesStore';
const config = useRuntimeConfig();
onMounted(async () => {
  await AlgerianCitiesStore().FetchCities();


})
</script>
<style>
body {
  margin: 0;
}
</style>