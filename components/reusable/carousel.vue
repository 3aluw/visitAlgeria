<template v-if="items">
    <swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation @swiper="onSwiper"
        @slideChange="onSlideChange" :breakpoints="{
    '320': {
        slidesPerView: 2,
        spaceBetween: 20,
    },

    '720': {
        slidesPerView: 4,
        spaceBetween: 50,
    },
}">
        <swiper-slide v-for="item in items" :key="item.title">

            <article class="card-cont">
                <a :href="item.href" rel="noopener noreferrer" target="_blank">
                    <div class="item-image">
                        <img :src="item.image" :alt="item.title">
                    </div>
                    <p class="item-title">{{ item.title }}</p>
                </a>
            </article>

        </swiper-slide>


    </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: ['items'],
    setup(props) {
        /*console.log(props.items)*/
        const onSwiper = (swiper) => {
            /* console.log(swiper);*/
        };
        const onSlideChange = () => {
            /*console.log('slide change');*/
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, A11y],
        };

    },
};
</script>
<style>
.swiper-button-next,
.swiper-button-prev {
    color: white;
    border: 30px solid rgb(0, 0, 0);
    border-radius: 100%;
}

.swiper-button-disabled {
    pointer-events: auto !important;
    cursor: no-drop !important;
}

/*card styling*/

.swiper-slide {
    height: auto;
    padding-block: 1rem;
}

.card-cont {



    height: 100%;
    background: white;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    transition: all 0.3s ease-in;
}

.card-cont:hover {
    color: rgb(21, 128, 51);
    filter: contrast(105%);
    font-size: 1.2rem;
}

.card-cont>a {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
}

.item-image {
    display: block;
    height: 80%;
    padding: 0.5rem;

}

.item-image>img {
    object-fit: cover;
    height: 100%;

}

.item-title {
    display: block;
    font-size: 1.2em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: 500;
    padding-inline: 0.4rem;
}
</style>
