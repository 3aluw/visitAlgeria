<template>
    <div class="cont">
        <div class="title">
            <h1> Frequently asked questions</h1>
        </div>
        <div class="questions-panel ">
            <v-expansion-panels variant="popout" class="my-4">
                <v-expansion-panel title="Will i have some much to do?"
                    text="Algeria is a vast country, So yeah, you will have so much to see!">
                </v-expansion-panel>
                <v-expansion-panel title="Is Algeria a safe place?"
                    text="It is ranked as the safest country in North Africa and the Middle East, according to a study by the Economist Intelligence Unit (EIU) published on November 16th 2018. The EIU’s Safe Travel Index ranks countries based on their safety levels, with Algeria scoring 99 out of 100 points.">
                </v-expansion-panel>
                <v-expansion-panel title="Are algerians welcoming tourists?">
                    <v-expansion-panel-text>
                        <p>tAlgerians love to see tourists. They are so welcoming and they will do anything to make
                            their guests feel comfortable. you can watch<a target="_blank" rel="noopener noreferrer"
                                href="https://www.youtube.com/watch?v=bmNe7aBEer8">
                                this video </a>

                        </p>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel title="How are the prices there ?">
                    <v-expansion-panel-text>
                        <p>The cost of living in Algeria is, on average, 61.76% lower than in United States,the exchange
                            rate has also been favorable for tourists, so it is possible to buy goods at a very low
                            price. you can check prices <a target="_blank" rel="noopener noreferrer"
                                href="https://www.numbeo.com/cost-of-living/country_result.jsp?country=Algeria&displayCurrency=USD">here</a>

                        </p>
                    </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel title="How can i plan my trip ?"
                    text="A traveling agency can help you, this site can too!">
                </v-expansion-panel>
                <v-expansion-panel title="is visa required ?">
                    <v-expansion-panel-text>
                        <p>That dependes on your home country, you can check this <a rel="noopener noreferrer"
                                target="_blank" href="https://www.markuslerner.com/travelscope/">interactive map</a>

                        </p>
                    </v-expansion-panel-text>

                </v-expansion-panel>
            </v-expansion-panels>
        </div>

    </div>

</template>
<script setup>

</script>
<style scoped>
.cont {
    padding-block-start: 2rem;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 10% 1fr;
    grid-template-columns: 100%;
    justify-items: stretch;
    justify-content: center;
    background: inherit;
}

.title {
    text-align: center;
}

.title>h1 {
    display: inline-block;

    padding: 2rem;
    font-size: 1.5rem;
    font-family: 'Century Gothic';
    font-style: normal;
    font-weight: 400;

}

.questions-panel {
    color: black;
    padding-top: 4rem;
    margin-inline: 10vw;
    filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));
}

.questions-panel a {
    color: #1f914c;
}
</style>