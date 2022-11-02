<template>
    <section>
        <div class="sub-section relative">
            <img src="~/assets/section3/Al-hamma park.jpg" alt="">
            <div class="img-layer-top  absolute "></div>
        </div>
        <div class="sub-section"><img src="~/assets/section3/chilia mountain.jpg" alt=""></div>
        <div class="sub-section"><img src="~/assets/section3/Ghardaia.jpg" alt=""></div>
        <div class="sub-section"><img src="~/assets/section3/Gouraya.jpg" alt=""></div>
        <div class="sub-section"><img src="~/assets/section3/Martyr's Memorial.jpg" alt=""></div>
        <div class="sub-section"><img src="~/assets/section3/the Atakor Plateau,.jpg" alt=""></div>
    </section>
</template>
<script>
export default {
    name: 'BestPlaces'
}
</script>

<style>
body {
    margin: 0;
}

section {
    display: grid;
    height: 100vh;
    box-sizing: border-box;
    padding-block: 2rem;
    background-color: rgba(228, 240, 255, 0.4);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
    gap: 1.3rem
}

.sub-section {
    padding: 1rem;
    filter: drop-shadow(8px 4px 15px rgba(0, 0, 0, 0.25));

}

.sub-section>img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.img-layer-top {
    padding: inherit;
    background: rgba(255, 255, 255, 0.3);
    top: 1rem;
    left: 1rem;
    width: calc(100% - 1rem);
    height: calc(100% - 1rem);
}
</style>