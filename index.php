<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Jessey's portfolio</title>
  <link href='https://fonts.googleapis.com/css?family=Lato:400,700,300|Open+Sans:400,600,700,300' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="css/animate.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
  <?php
    include "Database/GetProject.php";
   ?>
  <!--header-->
  <header class="main-header" id="header">
    <div class="bg-color">
      <!--nav-->
      <nav class="nav navbar-default navbar-fixed-top">
        <div class="col-md-12">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mynavbar" aria-expanded="false" aria-controls="navbar">
                          <span class="fa fa-bars"></span>
                      </button>
            <!-- <a href="index.html" class="navbar-brand">Bethany</a> -->
          </div>
          <div class="collapse navbar-collapse navbar-right" id="mynavbar">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#header">Home</a></li>
              <li><a href="#AboutMe">About Me</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <!--/ nav-->
      <div class="container text-center">
        <div class="wrapper wow fadeInUp delay-05s">
          <h2 class="top-title">Game Developer</h2>
          <h3 class="title">Jessey Stend</h3>
          <h4 class="sub-title">Een liefde voor visual development</h4>
        </div>
      </div>
    </div>
  </header>
  <!--/ header-->
  <!---->
  <!---->
  <section class="section-padding wow fadeInUp delay-02s" id="portfolio">

    <script type="text/javascript">
        var rows = "<?php echo $row_count; ?>";
        var databaseContent = <?php echo $myJSON; ?>;
    </script>

    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="section-title">
            <h2 class="head-title">Portfolio</h2>
            <hr class="botm-line">
          </div>
        </div>
        <div class="col-md-12 col-sm-12" id="ProjectInfo">
          <!-- <div class="ShowCase">
            <div class="ProjectImage fadeInUp">
              <div id="numbertext">1 / 3</div>
              <iframe width="720" height="400" src="https://www.youtube.com/embed/GstXQTnMJrk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <img src="img/port01.jpg" alt="" class="img-responsive">
            </div>
            <button class="slideButton" id="leftButton" type="button" name="button">&#10094;</button>
            <button class="slideButton" id="rightButton" type="button" name="button">&#10095;</button>
          </div>
          <div class="ProjectInformation">
            <h2 id="Naam">Project naam</h2>
            <p id="Subtitle">Subtitle</p>
            <h4>Beschrijving</h4>
            <h5 id="Beschrijving">Some text</h5>
            <h4>Geleerd</h4>
            <h5 id="Geleerd">Some text</h5>
            <h4>Overig</h4>
            <h5 id="Overig">Some text</h5>
          </div>
          <div class="ProjectLinks">
            <a id="Projectlink" href="https://www.google.com/search?q=github+logo&rlz=1C1TIGY_enNL701NL701&tbm=isch&source=lnt&tbs=ic:trans&sa=X&ved=0ahUKEwjUrNXJ3YbjAhWusaQKHfxtCXsQpwUIIg&biw=1536&bih=750&dpr=1.25#imgrc=Lp2OqU7fPdjSMM:"> <img src="img\Icons\ProjectIcon.png" id="ProjectIcons" alt=""> </a>
            <a id="GithubLink" href="https://www.google.com/search?q=github+logo&rlz=1C1TIGY_enNL701NL701&tbm=isch&source=lnt&tbs=ic:trans&sa=X&ved=0ahUKEwjUrNXJ3YbjAhWusaQKHfxtCXsQpwUIIg&biw=1536&bih=750&dpr=1.25#imgrc=Lp2OqU7fPdjSMM:"> <img src="img/Icons/GithubIcon.png" id="ProjectIcons" alt=""> </a>
          </div>
        </div> -->

        </div>
        <p class="sec-para">Klik op de plaatjes om meer informatie tevoorschijn tehalen</p>
        <div class="col-md-12 col-sm-12" id="ProjectContainer">
          <!-- <div class="col-md-4 col-sm-6 padding-right-zero">
            <div class="portfolio-box design">
              <img src="img/port01.jpg" alt="" class="img-responsive">
            </div>
          </div>
          <div class="col-md-4 col-sm-6 padding-right-zero">
            <div class="portfolio-box design">
              <img src="img/port02.jpg" alt="" class="img-responsive">
            </div>
          </div>
          <div class="col-md-4 col-sm-6 padding-right-zero">
            <div class="portfolio-box design">
              <img src="img/port03.jpg" alt="" class="img-responsive">
            </div>
          </div>
          <div class="col-md-4 col-sm-6 padding-right-zero">
            <div class="portfolio-box design">
              <img src="img/port04.jpg" alt="" class="img-responsive">
            </div>
          </div>
          <div class="col-md-4 col-sm-6 padding-right-zero">
            <div class="portfolio-box design">
              <img src="img/port05.jpg" alt="" class="img-responsive">
            </div>
          </div>
          <div class="col-md-4 col-sm-6 padding-right-zero">
            <div class="portfolio-box design">
              <img src="img/port06.jpg" alt="" class="img-responsive">
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
  <!---->
  <!---->
  <section id="AboutMe" class="section-padding">
    <!-- TO:DO het fixen van het inladen over de x as. die is te groot en werkt niet lekker voor mobiel. -->
    <div class="container">
      <div class="row">
        <div class="col-md-3 wow fadeInLeft delay-05s">
          <div class="section-title">
            <img src="img\picture.png" alt="" class="img-responsive">
            <h2 class="head-title">About Me</h2>
            <hr class="botm-line">
            <p class="sec-para">"Do it with passion, or not at all"</p>
          </div>
        </div>
        <div class="col-md-9">
          <div class="col-md-6 wow fadeInRight delay-02s">
            <div class="icon">
              <i class="fa fa-code"></i>
            </div>
            <div class="icon-text">
              <h3 class="txt-tl">languages</h3>
              <p class="txt-para">De "languages" waar ik gespecialiseerd zijn c#, javascript en c++. Ook al heb ik in deze talen het meeste ervaring, sta ik ook open voor wat nieuws.</p>
            </div>
          </div>

          <div class="col-md-6 wow fadeInRight delay-00s">
            <div class="icon">
              <i class="fa fa-laptop"></i>
            </div>
            <div class="icon-text">
              <h3 class="txt-tl">tools</h3>
              <p class="txt-para">De tool die ik voornamelijk gebruik is Unity. In deze game engine heb ik gewoon grofweg het meeste ervaring in. Voor het manage van mijn projecten gebruik ik git en source tree. Voor mijn multiplayer maak ik gebruik van Node.js.
              </p>
            </div>
          </div>

          <div class="col-md-6 wow fadeInRight delay-00s">
            <div class="icon">
              <i class="fa fa-diamond"></i>
            </div>
            <div class="icon-text">
              <h3 class="txt-tl">specialisatie</h3>
              <p class="txt-para">De projecten die ik draai, zijn vooral multiplayer en visueel gebaseerd. Hier heb ik het meeste intresse en kennis in. Ik sta wel altijd open om iets nieuws te leren.</p>
            </div>
          </div>

          <div class="col-md-6 wow fadeInRight delay-00s">
            <div class="icon">
              <i class="fa fa-briefcase"></i>
            </div>
            <div class="icon-text">
              <h3 class="txt-tl">werkervaring</h3>
              <p class="txt-para">Tot nu toe heb ik een half jaar stage gelopen bij <a href="http://www.dutch5.nl/">Dutch 5</a>, een mobile game development bedrijf. U kunt meer informatie hierover vinden op mijn blog maar in het kort heb ik hier een grote stap kunnen zetten als developer en weet ik veel meer over mobile development.
              </p>
            </div>
          </div>

          <div class="col-md-6 wow fadeInRight delay-00s">
            <div class="icon">
              <i class="fa fa-users"></i>
            </div>
            <div class="icon-text">
              <h3 class="txt-tl">sociale vaardigheden</h3>
              <p class="txt-para">Een van mijn eigenschappen waar ik het meest trots op ben, is mijn sociale vaardigheid. Dit is te blijken uit mijn horeca ervaring als barman en de sport die ik doe. Mijn collega's beschrijven me ook als een sociale, vriendelijke jonge.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!---->
  <!---->
  <section class="section-padding wow fadeInUp delay-05s" id="contact">
    <div class="container">
      <div class="row white">
        <div class="col-md-8 col-sm-12">
          <div class="section-title">
            <h2 class="head-title black">Contact mij</h2>
            <hr class="botm-line">
            <p class="sec-para black">Geintreseerd in mij als developer? Mail mij dan met vragen of om mij te contacteren.</p>
          </div>
        </div>
        <div class="col-md-12 col-sm-12">
          <div class="col-md-4 col-sm-6" style="padding-left:0px;">
            <h3 class="cont-title">Email mij</h3>
            <div id="sendmessage">Your message has been sent. Thank you!</div>
            <div id="errormessage"></div>
            <div class="contact-info">
              <form action="" method="post" role="form" class="contactForm">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validation"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validation"></div>
                </div>

                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validation"></div>
                </div>

                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validation"></div>
                </div>
                <button type="submit" class="btn btn-send">Send</button>
              </form>
            </div>

          </div>
          <div class="col-md-4 col-sm-6">
            <h3 class="cont-title">Contact gegevens</h3>
            <div class="location-info">
              <p class="white"><span aria-hidden="true" class="fa fa-phone"></span>Phone: 06 12 86 06 84</p>
              <p class="white"><span aria-hidden="true" class="fa fa-envelope"></span>Email: <a href="" class="link-dec">thejes@hotmail.nl</a></p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-icon-container hidden-md hidden-sm hidden-xs">
              <span aria-hidden="true" class="fa fa-envelope-o"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!---->
  <!---->
  <footer class="" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-7 footer-copyright">
          © Jessey Stend portfolio - All rights reserved
          <div class="credits">
            Strugtured by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div class="col-sm-5 footer-social">
          <div class="pull-right hidden-xs hidden-sm">
            <a href="https://www.instagram.com/code_aapje/"><i class="fa fa-instagram"></i></a>
            <a href="https://github.com/xFahdonx"><i class="fa fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!---->
  <!--contact ends-->
  <script src="js/jquery.min.js"></script>
  <script src="js/jquery.easing.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/wow.js"></script>
  <script src="js/custom.js"></script>
  <script src="contactform/contactform.js"></script>
  <script src="js\SlideShowManager.js" charset="utf-8"></script>
  <script src="js\PortfolioManager.js" charset="utf-8"></script>

</body>
</html>
