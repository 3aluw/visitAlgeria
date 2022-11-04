<template>
  <section class="cont">

  </section>
</template>

<script setup>



</script>
<script>
export default {
  name: 'cities'
}
</script>
<style scoped>
.cont {
  margin-block: 3rem;
  margin-inline: 2rem;
  height: calc(100vh - 6rem);
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: repeat(16, 1fr);
}
</style>