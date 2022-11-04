<template>
  <div class="global-cont">
    <ImagesCarousel></ImagesCarousel>
    <AlgeriaFeatures></AlgeriaFeatures>
    <BestPlaces></BestPlaces>
    <Cities></Cities>
  </div>
</template>

<script>
import AlgeriaFeatures from '~/components/algeriaFeatures.vue';
import ImagesCarousel from '~/components/imagesCarousel.vue';
import BestPlaces from '~/components/bestPlaces.vue';
import Cities from '~/components/cities.vue';
export default {
  name: "IndexPage",
  components: { ImagesCarousel, AlgeriaFeatures, BestPlaces, Cities }
}
</script>
<style>
.global-cont {
  margin: 0;
  max-width: 100vw;
  overflow-x: hidden;
}
</style>