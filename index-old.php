<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title><?php bloginfo( 'name' ) ?></title>

  <!-- Bootstrap core CSS -->
  <link href="/wp-content/themes/MEnet-wp/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="/wp-content/themes/MEnet-wp/static/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/MEnet-wp/static/css/boffi.css">
  <link rel="stylesheet" type="text/css" href="/wp-content/themes/MEnet-wp/static/css/header.css">
  <link href="/wp-content/themes/MEnet-wp/static/css/clean-blog.css" rel="stylesheet">

</head>

<body>
  <div id="sidebar-section-peripherial" class="main">
    <?php get_sidebar(); ?>
    <!-- Page Header -->
    <header class="masthead">
      <div class="overlay particle-network-animation home"></div>
      <div class="overlay particle-network-animation exploratory"></div>
      <div class="collapse navbar-collapse show" id="navbarResponsive">
        <ul id="menu-top-central" class="menu horizontal uppercase" style="visibility: visible;">
          <li id="menu-item-24890" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-24890">
            <a href="/ideas/" data-menu-index="0" class="no-barba"><span class='hidden ideasFull Your'>Your</span><span class="redden">Ideas</span><span class='hidden ideasFull arevalidones'>&nbsp;are&nbsp;valid&nbsp;ones</span></a>
          </li>
          <li id="menu-item-24892" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-24892">
            <a href="/menet/" data-menu-index="1" class="no-barba"><span class='hidden blogFull Inside'>Inside</span><span class="redden"><span class="ME">ME</span>&nbsp;&nbsp;net</span><span class='hidden blogFull Working'>Working</span></a>
          </li>
          <li id="menu-item-24896" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-24896">
            <a href="/projects/" data-menu-index="2" class="no-barba"><span></span><span class="redden">Projects</span> <span class='hidden projectsFull todiscover'>to&nbsp;discover</span></a>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1 class="blair"><span class="ME">ME</span>&nbsp;&nbsp;net</h1>
              <span class="subheading">
                <div class="subheading02">
                  Inside <span class="blair"><span class="ME">ME</span>&nbsp;&nbsp;&nbsp;netWork</span> you will find collaboration and brainstorming to achieve it</span>
                </div>
            </div>
          </div>
        </div>
      </div>
      <?php get_footer(); ?>
    </header>

    <p><button class="btn btn-primary start">◀︎ Explore</button></p>

    <!-- <div class="container" id="blogposts">
        <div class="row" data-aos="slide-up">
            <div class="col-md-10 col-lg-8">
                <?php $the_query = new WP_Query( 'posts_per_page=5' ); ?>
                <?php while ($the_query -> have_posts()) : $the_query -> the_post(); ?>
                <div class="post-preview">
                    <a href="<?php the_permalink() ?>">
                        <h2 class="post-title"><?php the_title(); ?></h2>
                        <h3 class="post-subtitle"><?php the_excerpt(__('(more…)')); ?></h3>
                    </a>
                    <p class="post-meta">Posted by&nbsp;<a href="#"><?php the_author(); ?></a> on <?php the_date(); ?></p>
                </div>
                <hr>
                <?php endwhile;
                wp_reset_postdata();
                ?>
                <div class="clearfix"></div>
            </div>
        </div>
    </div> -->
  </div>

  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

  <!-- Bootstrap core JavaScript -->
  <script src="/wp-content/themes/MEnet-wp/static/vendor/jquery/jquery.min.js"></script>
  <script src="/wp-content/themes/MEnet-wp/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Custom scripts for this template -->
  <script src="/wp-content/themes/MEnet-wp/static/js/clean-blog.js"></script>
  <script async src="/wp-content/themes/MEnet-wp/static/js/networkanimation.js"></script>
  <script src="/wp-content/themes/MEnet-wp/static/js/sidebar.js"></script>

</body>

</html>