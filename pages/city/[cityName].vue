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
                    <span>safety:</span> {{ cityData.safety }}
                </li>
                <li
                    :class="cityData.infustracture == 'Excelent' ? 'bold-green' : cityData.infustracture == 'Good' ? 'green' : 'orange'">
                    <span>infustracture:</span> {{ cityData.infustracture }}
                </li>

            </ul>

        </section>
        <section class="things-to-do"></section>
        <section class="hospitality">
            <h2>Top Hotels and restaurents in {{ cityData.name }}</h2>
            <iframe :src="cityData.urls[0]" width="640" height="480"></iframe>

        </section>


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

}


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
    padding-block: 1rem;
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