<template>
    <div class="cont">

        <p>Hello, you can use this form to send suggestions, report errors, or just to talk to me 🙂 </p>
        <div class="sub-cont">
            <div class="svg-cont">
                <img src="~/assets/quick-links/contact-us.svg" alt="fast mail icon">
            </div>
            <div class="form-cont">
                <form id="contact" action="https://formsubmit.co/5dcaf7199c62fddfe14b1cf1dfb3d7a0" method="POST">
                    <h3>Contact Form</h3>
                    <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html">
                    <fieldset>
                        <input placeholder="Your name" name="name" type="text" tabindex="1" required autofocus>
                    </fieldset>
                    <fieldset>
                        <input placeholder="Your Email Address" name="email" type="email" tabindex="2" required>
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Type your message here...." name="message" tabindex="5" required></textarea>
                    </fieldset>
                    <fieldset>
                        <button type="submit" id="contact-submit">Submit</button>
                    </fieldset>
                    <input type="hidden" name="_captcha" value="false">

                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;

    text-rendering: optimizeLegibility;
}

body {
    background: white;
}

.cont {
    min-height: 100vh;
}

.cont>p {
    padding-block: 2rem;
    font-size: 1.3rem;
    text-align: center;
}

.sub-cont {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-weight: 100;
    font-size: 12px;
    line-height: 30px;
    color: #777;
    display: grid;

    padding-block: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    align-items: center;
    column-gap: 1rem;
}

.form-cont {
    max-width: 400px;
    width: 100%;

    position: relative;
}

.svg-cont {
    max-width: 50vw;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
    background: #F9F9F9;
    padding: 25px;

    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
}

#contact h4 {
    margin: 5px 0 15px;
    display: block;
    font-size: 13px;
    font-weight: 400;
}

fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
}

#contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
}

#contact button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #4CAF50;
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
}

#contact button[type="submit"]:hover {
    background: #43A047;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
    text-align: center;
}

#contact input:focus,
#contact textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
}

::-webkit-input-placeholder {
    color: #888;
}

:-moz-placeholder {
    color: #888;
}

::-moz-placeholder {
    color: #888;
}

:-ms-input-placeholder {
    color: #888;
}
</style>