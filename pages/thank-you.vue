<template>

    <div class="cont">
        <img src="~/assets/quick-links/thank-you.png" alt="Thank you">
        <p>We just received your e-&nbsp;mail !; return to <NuxtLink :to="(`/`)">home page</NuxtLink>
        </p>
    </div>

</template>
<style setup>
.cont {

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}

.cont>* {
    max-width: 100%;
    padding: 1rem;
}

.cont>p {
    font-size: 2rem;
}

a {
    color: rgb(5 49 18 / 58%);
}

a:hover {
    color: rgb(33 192 78);
    text-decoration-line: underline;

}
</style>