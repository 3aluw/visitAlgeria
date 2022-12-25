<template>
    <div class="info-cont">
        <div class="text-cont">
            <slot></slot>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
    </div>
</template>

<style scoped>
.info-cont {
    position: relative;
    display: inline;
}

svg {
    display: inline;
}

.info-cont:hover>.text-cont {
    display: inline;
}

.text-cont {
    display: none;
    max-width: 198px;
    box-sizing: border-box;
    position: absolute;
    bottom: 60%;
    left: -60px;
    background: #c1f5b3;
    color: black;
    font-size: 0.8rem;
    width: 200px;
    padding-inline: 0.4rem;
    padding-top: 5px;
    padding-bottom: 2rem;
    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 41% 100%, 50% 75%, 0% 75%);
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 41% 100%, 50% 75%, 0% 75%);
}
</style>