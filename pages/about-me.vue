<template>
    <section>
        <div class="text-cont">
            <h1>about us (me 😀) </h1>
            <p> I'm just a solo programmer who was trying to find an interesting idea to work on, after some digging i
                found
                out that incoming tourists to my country (Algeria) may need some guidance that won't easily be found on
                the
                web. </p>
        </div>
        <div class="img-cont"> <img src="~/assets/quick-links/about-me.svg" alt="me asleep on my laptop"></div>
        <div class="text-nd-cont">the project stills humble, and I'm looking for new ideas/features to implement, if you
            have one
            send it by clicking on the "contact me" button 👇
            <div class="btn-cont">
                <a rel="noopener noreferrer" target="_blank"><button> <v-icon>
                            mdi-patreon
                        </v-icon>support on patreon </button></a>
                <a rel="noopener noreferrer" target="_blank"
                    href="mailto:2000aballah2014@gmail.com?subject=a%20mailAbout%20visit%20Algeria%20site"><button>
                        <v-icon>
                            mdi-file
                        </v-icon>contact me</button></a>
            </div>
        </div>

    </section>
</template>
<style scoped>
section {
    max-width: 50rem;
    margin: 0 auto;
    background: #ededed;
}



.text-cont>h1 {
    text-align: center;
    font-size: 4rem;
    font-family: cursive;
    margin-bottom: 1rem;
}

.img-cont {
    margin-block: 1rem;
}

.img-cont>img {

    margin: 0 auto;
}

.text-nd-cont {
    text-align: center;
}

.btn-cont {
    display: flex;
    margin-inline: 6.5rem;
    justify-content: space-around;
    margin-block: 2rem;
    gap: 1rem;
}

.btn-cont>* {
    flex: 1;
}

button {

    cursor: pointer;
    background: rgb(5 49 18 / 58%);
    color: #ffffff;
    -webkit-text-stroke: 0.19px rgb(255, 255, 255);
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 1rem;

    display: flex;
    gap: 1rem;
    transition: all 0.2s linear;
}

button:hover {
    background: rgb(33 192 78);
    transform: scale(1.1);
}
</style>