<template>
    <p>HI this is {{ $route.params.cityName }} </p>
    {{ cities }}
</template>
<script setup>

import { AlgerianCitiesStore } from "~/store/AlgerianCitiesStore";

const route = useRoute()
const cities = computed(() => AlgerianCitiesStore().cities);
</script>