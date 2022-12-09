<template>
    <div v-if="cityData" class="cont">

        <header class="flex items-center justify-start gap-4">
            <div class="cityNumber">{{ cityData.cityNumber }}</div>

            <div class="cityName">{{ cityData.name }}</div>
            <div class="summary">{{ cityData.summary }}</div>

        </header>


    </div>
</template>
<script setup>
import { AlgerianCitiesStore } from "~/store/AlgerianCitiesStore";
//extract the city name from the route
const route = useRoute()
const cityName = route.params.cityName;
//fetch teh city data from contentful
onMounted(() => { AlgerianCitiesStore().fetchOneCity(cityName) })

const cityData = computed(() => AlgerianCitiesStore().selectedCity[0]?.fields);


</script>
<style scoped>
.cont {
    padding: 1rem;
}


.cityNumber {
    font-family: 'Century Gothic', serif;
    font-size: 4rem;
    color: #00FF67;
    font-weight: 700;
}

.cityName {
    font-family: Century Gothic;
    font-size: 5rem;
    font-weight: 700;

}

.summary {
    align-self: end;
    padding-block: 0.7rem;
}
</style>