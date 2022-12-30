<template>
    <div>
        <section class="cont">
            <div class="cards-cont d-flex justify-center items-center">
                <div class="card">
                    <div class="svg-cont"><img src="~/assets/section2/undraw_people.svg" alt=""></div>
                    <div class="text-cont"> <span>Diverse</span>
                        <p>Algeria is one of the most diverse countries in the world.
                            it's a nation that has more than one ethenic. </p>
                    </div>
                </div>
                <div class="card">
                    <div class="svg-cont"><img src="~/assets/section2/undraw_nature.svg" alt=""></div>
                    <div class="text-cont"> <span>colorful</span>
                        <p> from desert to coast, Algeria combines different climates!, cities, country
                            sides, deserts and snow mountaians</p>
                    </div>
                </div>
                <div class="card">
                    <div class="svg-cont"><img src="~/assets/section2/undraw-history.svg" alt=""></div>
                    <div class="text-cont"> <span>rich culture</span>
                        <p>Since the dawn of human time, North Africa has been populated.
                            that long history made Algeria super cultural rich.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="svg-cont"><img src="~/assets/section2/undraw_comfort.svg" alt=""></div>
                    <div class="text-cont"> <span> comfortable </span>
                        <p>Algeria has a robust infustracture, you can find here cheap tranportation, a free medical
                            care!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
</script>
<script>
export default {
    name: 'algeriaFeatures'
}
</script>
<style scoped>
.cont {
    box-sizing: border-box;
    min-height: 100vh;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    justify-items: center;
    background: rgba(228, 240, 255, 0.42);
    padding-inline: 2rem;
}

.cards-cont {
    gap: 3.5rem;
    flex-wrap: wrap;
}

.card {
    min-height: 400px;
    min-width: 100px;
    flex: 1 1 0px;
    background: #ffffff;

    border-radius: 63px;
    padding: 1rem;
    text-align: center;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: Shanti;
    font-size: 1rem;
}

.svg-cont {
    padding: 1rem;
}

.text-cont>span {
    font-family: 'Century Gothic';
    font-size: 2rem;
    padding-bottom: 0.35rem;
    background-color: #2a3439;
    color: transparent;
    text-shadow: 0px 2px 3px rgba(0, 255, 103, 0.1);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;




}
</style>