<template>


    <li :class="{ 'big-item': city.fields.majorCity }" class="flex items-center justify-between">
        <img v-if="city.fields.majorCity" src="~/assets/icons/arrow-circle-right.svg">
        <p>{{ city.fields.name }}</p>
        <img src="~/assets/icons/arrow-circle-right.svg">
    </li>


</template>
  
<script setup>
const porps = defineProps(["city"])

const iconDic = {
    'Algiers': "~/assets/icons/star.svg",
    'Ghardaia': "~/assets/icons/mountain.svg",
    'Constantine': "~/assets/icons/bridge 1.svg",
    'Oran': "~/assets/icons/castle.svg",
    'Batna': "~/assets/icons/roman gate.svg",
    'Tamenrasset': "~/assets/icons/desert.svg",
    'Annaba': "~/assets/icons/sea.svg",
    'Bejaia': "~/assets/icons/north-mountain.svg",
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

.big-item {
    grid-row: span 2;

    grid-column-start: 1;
}
</style>