<template>
    <h1>Some famous avenues</h1>
    <section>

        <div class="sub-section"><img class="object-right" src="~/assets/section3/Martyr-Memorial.jpg" alt="">
            <div class="img-layer-top  absolute flex flex-column ">
                <NuxtLink :to="(`/city/Algiers`)" target="_blank">
                    <div class="location">
                        <p> Algiers <img src="~/assets/icons/external-link.svg" alt="external link"></p>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="sub-section"><img src="~/assets/section3/chilia-mountain.jpg" alt="">
            <div class="img-layer-top  absolute flex flex-column ">
                <NuxtLink :to="(`/city/Batna`)" target="_blank">
                    <div class="location">
                        <p> Batna <img src="~/assets/icons/external-link.svg" alt="external link"></p>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="sub-section"><img src="~/assets/section3/Ghardaia.jpg" alt="">
            <div class="img-layer-top  absolute flex flex-column ">
                <NuxtLink :to="(`/city/Ghardaia`)" target="_blank">
                    <div class="location">
                        <p> Ghardaia <img src="~/assets/icons/external-link.svg" alt="external link"> </p>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="sub-section relative">

            <img src="~/assets/section3/Al-hamma-park.jpg" alt="">
            <div class="img-layer-top  absolute flex flex-column ">
                <NuxtLink :to="(`/city/Algiers`)" target="_blank">
                    <div class="location">
                        <p> Algiers <img src="~/assets/icons/external-link.svg" alt="external link"> </p>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="sub-section"><img src="~/assets/section3/Gouraya.jpg" alt="">
            <div class="img-layer-top  absolute flex flex-column ">
                <NuxtLink :to="(`/city/Bejaia`)" target="_blank">
                    <div class="location">
                        <p> Bejaia <img src="~/assets/icons/external-link.svg" alt="external link"></p>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="sub-section"><img src="~/assets/section3/the-Atakor-Plateau,.jpg" alt="">
            <div class="img-layer-top  absolute flex flex-column ">
                <NuxtLink :to="(`/city/Adrar`)" target="_blank">
                    <div class="location">
                        <p> Adrar <img src="~/assets/icons/external-link.svg" alt="external link"></p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'BestPlaces'
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    section {
        grid-template-columns: 1fr 1fr !important;
        grid-template-rows: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) !important;
    }
}

body {
    margin: 0;
}

h1 {
    text-align: center;
    padding: 2rem;
    font-size: 1.8rem;
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 700;
}

section {
    display: grid;
    min-height: 100vh;
    box-sizing: border-box;
    padding-block: 2rem;
    background-color: inherit;
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
    background: rgba(255, 255, 255, 0.65);
    top: 1rem;
    left: 1rem;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.sub-section:hover>.img-layer-top {
    opacity: 1;
}

.location>p {
    display: flex;
    align-items: center;
    font-family: 'Shanti';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 46px;
}

.location>p>img {

    max-height: 2rem;
    display: inline;

}
</style>