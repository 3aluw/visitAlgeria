<template>


    <li :class="[city.fields.majorCity ? bigCityClass : smallCityClass]" class="flex items-center justify-between">
        <img v-if="city.fields.majorCity" :src=iconPath>
        <p>{{ city.fields.name }}</p>
        <img src="~/assets/icons/arrow-circle-right.svg">
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
    margin-inline: 25%
}

.big-item {
    grid-row: span 2;

    grid-column-start: 1;
}

li {
    min-height: 0;
    cursor: pointer;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(228, 240, 255, 0.37);
    color: #FFFFFF;
    font-family: 'Outfit';
    font-style: normal;
    font-weight: 400;
    -webkit-text-stroke: 1px solid rgba(0, 0, 0, 0.7);
    ;
}

li img {
    max-height: 75%;

}
</style>