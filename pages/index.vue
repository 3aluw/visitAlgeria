<template>
    <div class="global-cont">
        <ImagesCarousel />
        <AlgeriaFeatures />
        <BestPlaces />
        <div class="cities-button-cont">
            <button @click="toggleCitites" v-if="!showCitites">Show more</button>
        </div>
        <Transition name="cities">
            <Cities v-if="showCitites" />
        </Transition>
        <FAQ></FAQ>

    </div>
</template>
<script setup>
const showCitites = ref(false);
const toggleCitites = () => {
    showCitites.value = !showCitites.value;
}

</script>
<style>
body {
    margin: 0;
    background: #EDEFF4;

}


.cities-button-cont {
    display: flex;
    justify-content: center;
    padding-block: 2rem;
    background: rgba(228, 240, 255, 0.42);
}

.cities-button-cont>button {
    box-sizing: border-box;
    cursor: pointer;
    background: rgb(5 49 18 / 58%);
    color: #ffffff;
    font-family: 'Outfit';
    font-size: 2rem;
    font-weight: 400;
    -webkit-text-stroke: 0.19px rgb(255, 255, 255);
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    border: 1px gray solid;
    padding-inline: 1rem;
}

.cities-button-cont>button:hover {
    background: rgb(21, 128, 51);
}

.cities-enter-active,
.cities-leave-active {
    transition: all 1s ease;
}

.cities-enter-from,
.cities-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
</style>
  