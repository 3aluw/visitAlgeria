<template>
    <!-- Site footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="flex flex-wrap ">
                <div class="sm:w-full pr-4 pl-4 md:w-1/2 pr-4 pl-4">
                    <h6>About</h6>
                    <p class="text-justify"> <i>ALGERIA </i> Algeria is a country in North Africa, with a population of
                        over 40 million. The official language of Algeria is Arabic.

                        Algeria has an area of 2,381,741 square kilometers (905,595 sq mi), making it the 27th largest
                        country in the world. The country has mountain ranges and high plateaus in the north, while the
                        south is mostly flat. Algeria has over 6,500 km of coastline on the Mediterranean Sea. It also
                        has large areas of desert</p>
                </div>

                <div class="sm:w-1/2 pr-4 pl-4 md:w-1/4 pr-4 pl-4">
                    <h6>Popular cities</h6>
                    <ul class="footer-links">
                        <li>
                            <NuxtLink :to="(`/city/Algiers`)" target="_blank">ALgiers</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="(`/city/Oran`)" target="_blank">Oran</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="(`/city/Annaba`)" target="_blank">Annaba</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="(`/city/Ghardaia`)" target="_blank">Ghardaia</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="(`/city/Contantine`)" target="_blank">Contantine</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink :to="(`/city/Tamenrasset`)" target="_blank">Tamenrasset</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="sm:w-1/2 pr-4 pl-4 md:w-1/4 pr-4 pl-4">
                    <h6>Quick Links</h6>
                    <ul class="footer-links">
                        <li>
                            <NuxtLink :to="(`/about-me`)" target="_blank"> About Us</NuxtLink>
                        </li>
                        <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                        <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                        <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                        <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                    </ul>
                </div>
            </div>
            <hr>
        </div>
        <div class="container">
            <div class="flex flex-wrap ">
                <div class="md:w-2/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4">
                    <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by
                        <a href="#">Scanfcode</a>.
                    </p>
                </div>

                <div class="md:w-1/3 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 sm:w-full pr-4 pl-4 ">
                    <ul class="social-icons">
                        <li><a class="patreon" href="#"><v-icon>
                                    mdi-patreon
                                </v-icon></a></li>
                        <li><a class="twitter" href="#"><v-icon>
                                    mdi-twitter
                                </v-icon></a></li>
                        <li><a class="instagram" href="#"><v-icon>
                                    mdi-instagram
                                </v-icon></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style setup>
.site-footer {
    background-color: #26272b;
    padding: 45px 0 20px;
    font-size: 15px;
    line-height: 24px;
    color: #737373;
}

.site-footer hr {
    border-top-color: #bbb;
    opacity: 0.5
}

.site-footer hr.small {
    margin: 20px 0
}

.site-footer h6 {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px
}

.site-footer a {
    color: #737373;
}

.site-footer a:hover {
    color: rgb(33 192 78);
    ;
    text-decoration: none;
}

.footer-links {
    padding-left: 0;
    list-style: none
}

.footer-links li {
    display: block
}

.footer-links a {
    color: #737373
}

.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
    color: rgb(33 192 78);
    text-decoration: none;
}

.footer-links.inline li {
    display: inline-block
}

.site-footer .social-icons {
    text-align: right;
    margin-block: 0.1rem
}

.site-footer .social-icons a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d
}

.copyright-text {
    margin: 0
}

@media (max-width:991px) {
    .site-footer [class^=col-] {
        margin-bottom: 30px
    }
}

@media (max-width:767px) {
    .site-footer {
        padding-bottom: 0
    }

    .site-footer .copyright-text,
    .site-footer .social-icons {
        text-align: center
    }
}

.social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}

.social-icons li {
    display: inline-block;
    margin-bottom: 4px
}

.social-icons li.title {
    margin-right: 15px;
    text-transform: uppercase;
    color: #96a2b2;
    font-weight: 700;
    font-size: 13px
}

.social-icons a {
    background-color: #eceeef;
    color: #818a91;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear
}

.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
    color: #fff;
    background-color: rgb(33 192 78)
}

.social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px
}

.social-icons a.instagram:hover {
    background-color: #cc4e13
}

.social-icons a.twitter:hover {
    background-color: #00aced
}

.social-icons a.linkedin:hover {
    background-color: #007bb6
}

.social-icons a.dribbble:hover {
    background-color: #ea4c89
}

@media (max-width:767px) {
    .social-icons li.title {
        display: block;
        margin-right: 0;
        font-weight: 600
    }
}
</style>
