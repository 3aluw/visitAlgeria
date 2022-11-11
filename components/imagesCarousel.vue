<template>
  <section class="cont">
    <p> Algeria has its own <span class="moving-text" ref="templText">{{ text }}</span> </p>
    <img class="first-image" :src="firstImage" ref="templFirstImage" alt="a">
    <img class="second-image" :src="secondImage" ref="templSecondImage" alt="a">
  </section>
</template>

<script setup>


import { onMounted, ref, computed } from "vue";


const wordsDic = ["nature", "diversity", "culture", "sahara", "history"];
const picsDic = {
  0: ["pics/ahmed-el-amine-nakib--sos_rlimpq-unsplash_vf7o3.jpg", 0],
  1: ["pics/azzedine-rouichi-9p4pigah7ho-unsplash_2f0xz.jpg", 3],
  2: ["pics/tetbirt-salim-4lunkr1gtd8-unsplash_rpt6s.jpg", 1],
  3: ["pics/bilou-bilal-t6p8fg1ye-y-unsplash_fczpd.jpg", 0],
  4: ["pics/mido-art-nip2ckjwghm-unsplash_e336p.jpg", 3],
  5: ["pics/daoud-abismail-umv3cyw6zbu-unsplash_yi7gc.jpg", 2],
  6: ["pics/Archaeological sites.jpg", 4],
  7: ["pics/camels.jpg", 3],
  8: ["pics/houssam-korichi-dvtriyraebk-unsplash_zhy3u.jpg", 1],
  9: ["pics/imgvortex-zyxtzqw51z4-unsplash_r73gs.jpg", 3],
  10: ["pics/issam-ammiche-z21iaeduucg-unsplash_igcrv.jpg", 2],
  11: ["pics/jamil-kabar-jrnrb3hgetc-unsplash_mebyv.jpg", 4],
  12: ["pics/tahiro-achoub-ghimenz-tls-unsplash_n76yy.jpg", 4],
  13: ["pics/fenec.jpg", 3],
  14: ["pics/nassim-allia-jfrtceex5ue-unsplash_j8su5.jpg", 0],
  15: ["pics/Algerian-Spicy-Chicken-and-Chickpea-Tagin.jpg"],
  16: ["pics/masjid.jpg", 2],
  17: ["pics/tahiro-achoub-ghimenz-tls-unsplash_n76yy.jpg", 4],
};

const firstImageIndex = ref(0);
const firstImage = computed(() => `./${picsDic[firstImageIndex.value][0]}`);
const secondImageIndex = ref(1);
const secondImage = computed(() => `./${picsDic[secondImageIndex.value][0]}`);

const textIndex = ref(0);
const text = computed(() => wordsDic[picsDic[textIndex.value][1]]);


const templText = ref(null);
const templFirstImage = ref(null)
const templSecondImage = ref(null)
const animatedEl = [templText, templFirstImage, templSecondImage];

onMounted(() => {

  const objLen = Object.keys(picsDic).length - 1;
  window.addEventListener('load', () => {
    animatedEl.forEach((el) => el.value.style.animationPlayState = "running")
    setTimeout(() => {
      setTimeout(() => {
        firstImageIndex.value += 2;
        setInterval(() => {

          firstImageIndex.value + 2 <= objLen ? firstImageIndex.value += 2 : firstImageIndex.value = 0;

        }, 9000);
      }, 2500)

      setTimeout(() => {
        secondImageIndex.value += 2;
        setInterval(() => {

          secondImageIndex.value + 2 <= objLen ? secondImageIndex.value += 2 : secondImageIndex.value = 1;
        }, 9000);
      }, 8800)
      setTimeout(() => {
        textIndex.value += 1;
        setInterval(() => {
          textIndex.value + 1 <= objLen ? textIndex.value += 1 : textIndex.value = 0;
        }, 4500)
      }, 2000)


    }, 500)
  })
})
</script>
<script>
export default {
  name: 'imagesCarousel'
}
</script>
<style scoped>
.cont {
  height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

}

.cont>p {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 3rem;
  z-index: 2;
  color: white;
  -webkit-text-stroke: 1px black;
  overflow: hidden;
}

.moving-text {
  color: rgb(0, 180, 51);
  display: inline-block;
  animation: textmove 4.5s infinite linear;
  animation-delay: 2s;
  animation-play-state: paused;
}

@keyframes textmove {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  50% {
    transform: translateY(0%);
    opacity: 1;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

.cont>img {
  width: 100%;
  height: 100vh;
  -o-object-position: center;
  object-position: center;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  filter: blur(0.5px);
}

.first-image {
  animation: firstmove 9s infinite linear;
  animation-delay: 2s;
  animation-play-state: paused;
}

@keyframes firstmove {
  0% {
    transform: translateY(0);
  }

  25% {
    transform: translateY(100%);
    opacity: 0;
  }

  25.000001% {
    transform: translateY(-100%);
    opacity: 0;
  }

  50% {
    transform: translateY(-100%);
    opacity: 0;
  }

  75% {
    transform: translateY(0%);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.second-image {
  transform: translateY(-100%);
  animation: secondmove 9s infinite linear;
  animation-delay: 2s;
  animation-play-state: paused;
}

@keyframes secondmove {
  0% {
    transform: translateY(-100%);
  }

  25% {
    transform: translateY(0%);
    opacity: 1;
  }

  50% {
    transform: translateY(0%);
    opacity: 1;
  }

  75% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>