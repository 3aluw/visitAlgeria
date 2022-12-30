<template>


    <li :class="[city.fields.majorCity ? bigCityClass : smallCityClass]">
        <NuxtLink :to="(`/city/` + city.fields.name)" class="flex items-center justify-between link">
            <img v-if="city.fields.majorCity" :src=iconPath>
            <p>{{ city.fields.name }}</p>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M27.0833 18.75L33.3333 25M33.3333 25L27.0833 31.25M33.3333 25H16.6667M43.75 25C43.75 27.4623 43.265 29.9005 42.3227 32.1753C41.3805 34.4502 39.9993 36.5172 38.2582 38.2582C36.5172 39.9993 34.4502 41.3805 32.1753 42.3227C29.9005 43.265 27.4623 43.75 25 43.75C22.5377 43.75 20.0995 43.265 17.8247 42.3227C15.5498 41.3805 13.4828 39.9993 11.7417 38.2582C10.0006 36.5172 8.61953 34.4502 7.67726 32.1753C6.73498 29.9005 6.25 27.4623 6.25 25C6.25 20.0272 8.22544 15.2581 11.7417 11.7417C15.2581 8.22544 20.0272 6.25 25 6.25C29.9728 6.25 34.7419 8.22544 38.2582 11.7417C41.7746 15.2581 43.75 20.0272 43.75 25Z"
                    stroke="#3F3F46" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </NuxtLink>
    </li>


</template>
  
<script setup>
const bigCityClass = ref('big-item');
const smallCityClass = ref(" small-city")
const props = defineProps(["city"])

const iconPath = computed(() => iconDic[props.city.fields.name]);
const iconDic = {
    'Algiers': "./icons/star.svg",
    'Ghardaia': "./icons/mountain.svg",
    'Constantine': "./icons/bridge 1.svg",
    'Oran': "./icons/castle.svg",
    'Batna': "./icons/roman gate.svg",
    'Tamenrasset': "./icons/desert.svg",
    'Annaba': "./icons/sea.svg",
    'Bejaia': "./icons/north-mountain.svg",
}

</script>
<script>
export default {
    name: 'CitiesListItem'
}
</script>
<style scoped>
.cont {
    width: 100%;

}

.small-city {
    gap: 2rem;
    margin-inline: 25%;
    font-size: 1.3rem;

}

.big-item {
    grid-row: span 2;
    font-size: 1.5rem;

    grid-column-start: 1;
}

.link {
    height: 100%;
    font-size: inherit;
}

li {
    min-height: 0;
    cursor: pointer;
    background: rgb(23 90 42 / 58%);
    color: #ffffff;
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    -webkit-text-stroke: 0.19px rgb(255, 255, 255);
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

li svg,
li img {
    max-height: 75%;

}

li:hover {
    background: rgb(0, 180, 51);
}

li:hover>svg>path {
    stroke: white;
}
</style>