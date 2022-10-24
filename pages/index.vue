<template>
  <div>
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
body {
  margin: 0;
}
</style>