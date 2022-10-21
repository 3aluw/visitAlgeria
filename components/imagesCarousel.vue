<template>
  <div class="cont">
    <img class="first-image" :src="firstImage" alt="a">
    <img class="second-image" :src="secondImage" alt="a">
  </div>
  </template>

<script setup>
import {ref} from "vue"
const picsDic ={
  0 :"pics/ahmed-el-amine-nakib--sos_rlimpq-unsplash_vf7o3.jpg",
  1:"pics/azzedine-rouichi-9p4pigah7ho-unsplash_2f0xz.jpg",
  2:"pics/azzedine-rouichi-mwh7mk_78yc-unsplash_t2z4f.jpg",
  3:"pics/bilou-bilal-t6p8fg1ye-y-unsplash_fczpd.jpg",
  4:"pics/daoud-abismail-i6hnhfap_0o-unsplash_zdrha.jpg",
  5:"pics/daoud-abismail-umv3cyw6zbu-unsplash_yi7gc.jpg",
  6:"pics/dhaya-eddine-bentaleb-cd2qa8evowk-unsplash_osd7w.jpg",
  7:"pics/halima-bouchouicha-n5ntkit6o3e-unsplash_6litb.jpg",
  8:"pics/houssam-korichi-dvtriyraebk-unsplash_zhy3u.jpg",
  9:"pics/imgvortex-zyxtzqw51z4-unsplash_r73gs.jpg",
  10:"pics/issam-ammiche-z21iaeduucg-unsplash_igcrv.jpg",
  11:"pics/jamil-kabar-jrnrb3hgetc-unsplash_mebyv.jpg",
  12:"pics/kat-med-qjyxexdlpve-unsplash_rfzqv.jpg",
  13:"pics/mido-art-nip2ckjwghm-unsplash_e336p.jpg",
  14:"pics/nassim-allia-jfrtceex5ue-unsplash_j8su5.jpg",
  15:"pics/pexels-abdelhak-sami-bagou-8798170_9rpfw.jpg",
  16:"pics/saidani-moussaab-pixrcdveafq-unsplash_jf9ly.jpg",
  17:"pics/tahiro-achoub-ghimenz-tls-unsplash_n76yy.jpg",
  18:"pics/tetbirt-salim-4lunkr1gtd8-unsplash_rpt6s.jpg",
}
const firstImage = ref(require(`~/assets/${picsDic[0]}`));
const secondImage= ref(require(`~/assets/${picsDic[1]}`));
</script>
<script>
export default {
    name: 'imagesCarousel'
  }
  </script>
  <style scoped>
  .cont{
    height: 100vh;
    width: 100vw;
  
  }
  .cont>img{
    width: 100%;
    height:100vh;
    object-position: center;
     object-fit: cover;
     position: absolute;
  }
.first-image{
  animation: firstmove 12s infinite;
  animation-delay: 3s;
}

@keyframes firstmove{
  0%{transform: translateY(0);}
  25%{transform: translateY(100%); opacity: 0;}
  25.000001%{transform: translateY(-100%); opacity: 0;}
  50%{transform: translateY(-100%); opacity: 0;}
  75%{transform: translateY(0%);opacity: 1;} 
  100%{transform: translateY(0);opacity: 1;}
}
.second-image{
  transform: translateY(-100%);
  animation: secondmove 12s infinite;
  animation-delay: 3s;
}
@keyframes secondmove{
  0%{ transform: translateY(-100%);}
  25%{transform: translateY(0%); opacity: 1;}
  50%{transform: translateY(0%); opacity: 1;}
  75%{transform: translateY(100%);opacity: 0;}
  100%{transform: translateY(-100%);opacity: 0;}
}
</style>