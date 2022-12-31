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
        <section class="things-to-do" v-if="cityData.links.attractions">
            <h2>Places to visit in {{ cityData.name }}</h2>
            <carousel :items="cityData.links.attractions"></carousel>
        </section>
        <section class="hospitality" v-if="cityData.links.mapEmbed">
            <h2>Top Hotels and restaurents in {{ cityData.name }}</h2>
            <iframe :src="cityData.links.mapEmbed" width="640" height="480"></iframe>

        </section>
        <section class="buttons">
            <h2>Discover more</h2>
            <div class="buttons-cont">
                <a v-for="(link, to) in cityData.links.buttons" :href="link" rel="noopener noreferrer"
                    target="_blank"><button>
                        <img class="logo" :src="'/logos/' + logosDic[to]">
                        <p>{{ textsDic[to] }}</p>
                    </button></a>

            </div>
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

/*info messages*/
const safetyMessage = computed(() => {
    return cityData.safety == "Excelent" ? "You are in a very safe city" : "Overall you will be okay, but avoid going to shady neighnours or wandering lonely late at night  "
})
const infustractureMessage = computed(() => {
    return cityData.infustracture == "Excelent" ? "Hopefully, You will easily find all your needs" : "You are advised to plan your trip in this city very well  "
})

/* buttons*/
const logosDic = {
    "googleMap": "googleMap.svg",
    "airbnb": "airbnb.svg",
    "hotelsCom": "hotelsCom.png",
    "djazairess": "djazairess.png",
    "wikipedia": "wikipedia.svg",
}

const textsDic = {
    "googleMap": "show on map",
    "airbnb": "see on airbnb",
    "hotelsCom": "book a hotel",
    "djazairess": "see latest news",
    "wikipedia": "more info",
}


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


/*wallpaper section*/
.cont {
    position: relative;
}

.layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
}



/*buttons */
.buttons-cont {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    row-gap: 1rem;
}

.buttons-cont button {
    display: flex;
    gap: 1rem;
    align-items: center;
    height: 4rem;
    width: 14rem;
    cursor: pointer;
    justify-content: space-between;
    padding: 1rem;
    padding-block: 8px;
    filter: grayscale(100%);
    transition: all 0.3s ease-in;
    background: white;
    border-radius: 5px;
    border: 0.8px solid gray;
    font-size: medium;
}

.buttons-cont button:hover {
    filter: grayscale(0%);
    background: #78cc8f;
    color: white;
}

.logo {
    max-height: 3rem;
    max-width: 50%;

}
</style>