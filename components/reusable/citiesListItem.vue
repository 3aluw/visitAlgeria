<template>


    <li :class="{ 'big-item': city.fields.majorCity }" class="flex items-center justify-between">
        <img v-if="city.fields.majorCity" :src=iconPath>
        <p>{{ city.fields.name }}</p>
        <img src="~/assets/icons/arrow-circle-right.svg">
    </li>


</template>
  
<script setup>
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

.big-item {
    grid-row: span 2;

    grid-column-start: 1;
}

li img {}
</style>