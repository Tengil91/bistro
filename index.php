<?php
    session_start();
    include_once 'securimage/securimage.php';
    $securimage = new Securimage();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="carousel.css">
    <link rel="icon" href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/161/hamburger_1f354.png">
    <title>Tengils Bistro</title>
</head>
<!-- go() sets height of the carousel (carouselheightsetter.js) -->
<body onload="go()">
    <nav id="navigationheader">
        <a href="#homeheader">Hem</a>
        <a href="#menuheader">Meny</a>
        <a href="#imagesheader">Bilder</a>
        <a href="#contactheader">Kontakt/Bokning</a>
        <p>&#9776;</p>
    </nav>
    <p id="burger">&#9776;</p>
    <div id="darkness"></div>
    <main class="wrapper">
        <section id="home" class="content">
        <h2 class="sectionbreaker" id="homeheader">Hem</h2>
            <h1>Välkommen</h1>
        </section>
        <section id="menu" class="content">
            <h2 class="sectionbreaker" id="menuheader">Meny</h2>
            <a href="https://docs.wixstatic.com/ugd/a5e176_8cba3cdf3b3d443b81fe6906fa627443.pdf" target=_blank><div class="menupic">
                <h2>Meny</h2>
            </div></a>
            <div class="randompic">
                <h2>Måltidsförslag</h2>
            </div>
        </section>
        <section id="images" class="content">
            <h2 class="sectionbreaker" id="imagesheader">Bilder</h2>
            <div id="carouselcomponent"></div>
            
        </section>
        <section id="contact" class="content">
            <h2 class="sectionbreaker" id="contactheader">Kontakt/Bokning</h2>
            <div class="col-container">
                <div class="col">
                    <p>Vi existerar på Gatvägen 69</p>
                    <p>Öppettider: När vi behöver cach</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1913.1401233777308!2d16.391254115664967!3d61.34688475468009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4666e9410253d45f%3A0x40ca9d7793b7b0c7!2zVsOlZ2dhdGFuLCBCb2xsbsOkcw!5e0!3m2!1ssv!2sse!4v1551426937435" width="300" height="300" allowfullscreen></iframe>
                </div>
                <div class="col align-left">
                    <p>Kontakta oss</p>
                    <form action="includes/sendmail.php" method="POST">
                        <label for="">Ditt namn:</label>
                        <input type="text" name="name">
                        <label for="">Din mailaddress:</label>
                        <input type="email" name="mail">
                        <label for="">Meddelande:</label>
                        <textarea name="msg"></textarea><br>
                        <!-- captchagrejer -->
                        <img id="captcha" src="http://tengil.one/bistro/securimage/securimage_show.php" alt="CAPTCHA Image">
                        <input type="text" name="captcha_code" size="10" maxlength="6" /><a href="#" onclick="document.getElementById('captcha').src = 'http://tengil.one/bistro/securimage/securimage_show.php?' + Math.random(); return false">[ Different Image ]</a>
                        <button type="submit" name="submit">Skicka</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script type="module" src="carousel/carouselcontainer.js"></script>
    <script type="module" src="carousel/carousel.js"></script>
    <script type="module" src="carousel/carouselbutton.js"></script>
    <script type="module" src="carousel/carouselimage.js"></script>
    <script src="carousel/carouselheightsetter.js"></script>
    <script src="randommeal.js"></script>
    <script src="togglenav.js"></script>
</body>
</html>