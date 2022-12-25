<template>
    <swiper :modules="modules" :slides-per-view="3" :space-between="50" navigation @swiper="onSwiper"
        @slideChange="onSlideChange">

        <swiper-slide>Slide 1 </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>

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
        console.log(props.items)
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
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
    color: #17793e;
}
</style>
