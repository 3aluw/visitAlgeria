<template>
  <div class="global-cont">
    <ImagesCarousel></ImagesCarousel>
    <AlgeriaFeatures></AlgeriaFeatures>
    <BestPlaces></BestPlaces>
  </div>
</template>

<script>
import AlgeriaFeatures from '~/components/algeriaFeatures.vue';
import ImagesCarousel from '~/components/imagesCarousel.vue';
import BestPlaces from '~/components/bestPlaces.vue';
export default {
  name: "IndexPage",
  components: { ImagesCarousel, AlgeriaFeatures, BestPlaces }
}
</script>
<style>
.global-cont {
  margin: 0;
  max-width: 100vw;
  overflow-x: hidden;
}
</style>