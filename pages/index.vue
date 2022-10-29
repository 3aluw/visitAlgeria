<template>
  <div class="global-cont">
    <ImagesCarousel></ImagesCarousel>
    <AlgeriaFeatures></AlgeriaFeatures>
  </div>
</template>

<script>
import AlgeriaFeatures from '~/components/algeriaFeatures.vue';
import ImagesCarousel from '~/components/imagesCarousel.vue';
export default {
  name: "IndexPage",
  components: { ImagesCarousel, AlgeriaFeatures }
}
</script>
<style>
.global-cont {
  margin: 0;
  max-width: 100vw;
  overflow-x: hidden;
}
</style>