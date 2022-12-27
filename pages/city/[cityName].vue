<template>
    <div v-if="cityData" class="cont">

        <header class="flex items-center justify-start gap-4">
            <div class="cityNumber">{{ cityData.cityNumber }}</div>

            <div class="cityName">{{ cityData.name }}</div>
            <div class="summary">{{ cityData.summary }}</div>

        </header>
        <section class="infos">
            <ul class="line-one flex justify-between">
                <li><span>Area:</span> {{ cityData.area }}km2</li>
                <li><span>population:</span> +{{ cityData.population }}</li>
                <li><span>climate:</span> {{ cityData.climate }}</li>
            </ul>
            <ul class="line-one flex justify-around">
                <li
                    :class="cityData.safety == 'Excelent' ? 'bold-green' : cityData.safety == 'Good' ? 'green' : 'orange'">

                    <span>safety:</span> {{ cityData.safety }} <infoIconVue>{{ safetyMessage }}</infoIconVue>
                </li>
                <li
                    :class="cityData.infustracture == 'Excelent' ? 'bold-green' : cityData.infustracture == 'Good' ? 'green' : 'orange'">
                    <span>infustracture:</span> {{ cityData.infustracture }}<infoIconVue>{{ infustractureMessage }}
                    </infoIconVue>
                </li>

            </ul>

        </section>
        <section class="things-to-do" v-if="cityData.attractions">
            <h2>Places to visit in {{ cityData.name }}</h2>
            <carousel :items="cityData.attractions"></carousel>
        </section>
        <section class="hospitality" v-if="cityData.urls">
            <h2>Top Hotels and restaurents in {{ cityData.name }}</h2>
            <iframe :src="cityData.urls[0]" width="640" height="480"></iframe>

        </section>


    </div>
</template>
<script setup>
import carousel from "@/components/reusable/carousel.vue";
import infoIconVue from "~~/components/reusable/infoIcon.vue";
import { AlgerianCitiesStore } from "~/store/AlgerianCitiesStore";
//extract the city name from the route
const route = useRoute()
const cityName = route.params.cityName;
//fetch teh city data from contentful
onMounted(() => { AlgerianCitiesStore().fetchOneCity(cityName) })

const cityData = computed(() => AlgerianCitiesStore().selectedCity[0]?.fields);
const safetyMessage = computed(() => {
    return cityData.safety == "Excelent" ? "You are in a very safe city" : "Overall you will be okay, but avoid going to shady neighnours or wandering lonely late at night  "
})
const infustractureMessage = computed(() => {
    return cityData.infustracture == "Excelent" ? "Hopefully, You will easily find all your needs" : "You are advised to plan your trip in this city very well  "
})
</script>
<style scoped>
/*UTILITY*/
.orange {
    color: #FFB800;
}

.green {
    color: #33FF85;
}

.bold-green {
    color: #00AA45;
}

h2 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: sans-serif;
    margin-block: 1rem;
}


.cont {
    padding: 1rem;
}

section {
    margin-block: 3rem;
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
    padding-block: 1rem;
    font-weight: bold;
}

/*city infos section*/
.infos ul {
    margin-block: 1rem;
}

.infos ul li {
    font-family: 'Century';

    font-size: 1rem;
}

.infos ul li span {
    font-family: "Century Gothic";
    font-weight: 700;
    font-size: 1rem;
    color: black;
}


.hospitality iframe {
    margin: 1rem auto;
}
</style>