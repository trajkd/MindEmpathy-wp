<?php 
/**
 * Template Name: Publish idea
 * Template Post Type: page, projects
 **/ 
?>
<!DOCTYPE html>
<html lang="en" style="--vh:6.21px;">
    <head>
    	<?php 
		if (have_posts())
		while (have_posts()) : the_post(); 
		$IDs = str_getcsv(get_the_content());
		endwhile;
		if ($IDs[1] === esc_html( $current_user->user_email )) {
			header( "Location: /viewmode/".$IDs[0] ); die;
		}; ?>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style class="vjs-styles-defaults">
            .video-js {
            width: 300px;
            height: 150px;
            }
            .vjs-fluid {
            padding-top: 56.25%
            }
        </style>
        <style type="text/css">@charset "UTF-8"</style>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="yes" name="apple-mobile-web-app-capable">
        <meta content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no" name="viewport">
        <meta name="robots" content="index, follow">
        <title>Add idea - <?php bloginfo( 'name' ) ?></title>
        <link rel="stylesheet" href="/wp-content/themes/MindEmpathy-wp/static/css/app.css">
        <link rel="stylesheet" href="/wp-content/themes/MindEmpathy-wp/static/css/css2.css">
        <style>
            :root {
            --main-color-hue: 360;
            --main-color-saturation: 60%;
            --main-color-lightness: 50%;
            --title-font-family: Alata, serif;
            --text-font-family: Roboto, sans-serif;
            }
            .Ideas {
            	color: #ff0007;
            }
        </style>
        <meta name="title" content="<?php bloginfo( 'name' ) ?>">
        <style id="vue-line-clamp">.vue-line-clamp{
            display: block;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            word-break: break-all;
            text-overflow: ellipsis;
            }
        </style>
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/ck.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/ot.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/vue.css">
        <link href="/wp-content/themes/MindEmpathy-wp/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
        <link href="/wp-content/themes/MindEmpathy-wp/static/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
        <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="/wp-content/themes/MindEmpathy-wp/static/fonts/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/boffi.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/style.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/static.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/dipaolo.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/dipaolo2.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/header.css">
        <link href="/wp-content/themes/MindEmpathy-wp/static/css/clean-blog.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/lago.css">
        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/lago-style.css">
        <script src="/wp-content/themes/MindEmpathy-wp/static/js/main.js"></script>
        <script src="https://kit.fontawesome.com/4c0b3ae1d6.js" crossorigin="anonymous"></script>
        <script type="text/javascript">var projectID = "<?php echo $IDs[0]; ?>"</script>
    </head>
    <body id="app" class="">
    	<div id="sidebar-section-peripherial">
    		<?php get_sidebar(); ?>
		    <idt-page>
		    	<div class="page__content">
		        	<div class="project"> 
		            	<form name="form" novalidate="" class="ng-pristine ng-valid">
		                	<div class="project-banner" style="background-image: url();">
		                		<div class="project-social">
									<a href="facebook.com">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 14222 14222"><circle cx="7111" cy="7112" r="7111" fill="#1977f3"></circle><path d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z" fill="#fff"></path></svg>
									</a>
										
									<a href="instagram.com">
										<svg width="133" height="132" viewBox="0 0 133 132" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g id="Instagram_logo_2016 1">
										<path id="Vector" d="M66.034 1C38.892 1 30.954 1.028 29.411 1.156C23.841 1.619 20.375 2.496 16.599 4.376C13.689 5.821 11.394 7.496 9.12899 9.844C5.00399 14.126 2.50399 19.394 1.59899 25.656C1.15899 28.696 1.03099 29.316 1.00499 44.844C0.994994 50.02 1.00499 56.832 1.00499 65.969C1.00499 93.089 1.03499 101.019 1.16499 102.559C1.61499 107.979 2.46499 111.389 4.26499 115.119C7.70499 122.259 14.275 127.619 22.015 129.619C24.695 130.309 27.655 130.689 31.455 130.869C33.065 130.939 49.475 130.989 65.895 130.989C82.315 130.989 98.735 130.969 100.305 130.889C104.705 130.682 107.26 130.339 110.085 129.609C117.875 127.599 124.325 122.319 127.835 115.079C129.6 111.439 130.495 107.899 130.9 102.762C130.988 101.642 131.025 83.785 131.025 65.952C131.025 48.116 130.985 30.292 130.897 29.172C130.487 23.952 129.592 20.442 127.77 16.732C126.275 13.695 124.615 11.427 122.205 9.108C117.904 5 112.644 2.5 106.376 1.596C103.339 1.157 102.734 1.027 87.194 1H66.034Z" fill="url(#paint0_radial)"/>
										<path id="Vector_2" d="M66.034 1C38.892 1 30.954 1.028 29.411 1.156C23.841 1.619 20.375 2.496 16.599 4.376C13.689 5.821 11.394 7.496 9.12899 9.844C5.00399 14.126 2.50399 19.394 1.59899 25.656C1.15899 28.696 1.03099 29.316 1.00499 44.844C0.994994 50.02 1.00499 56.832 1.00499 65.969C1.00499 93.089 1.03499 101.019 1.16499 102.559C1.61499 107.979 2.46499 111.389 4.26499 115.119C7.70499 122.259 14.275 127.619 22.015 129.619C24.695 130.309 27.655 130.689 31.455 130.869C33.065 130.939 49.475 130.989 65.895 130.989C82.315 130.989 98.735 130.969 100.305 130.889C104.705 130.682 107.26 130.339 110.085 129.609C117.875 127.599 124.325 122.319 127.835 115.079C129.6 111.439 130.495 107.899 130.9 102.762C130.988 101.642 131.025 83.785 131.025 65.952C131.025 48.116 130.985 30.292 130.897 29.172C130.487 23.952 129.592 20.442 127.77 16.732C126.275 13.695 124.615 11.427 122.205 9.108C117.904 5 112.644 2.5 106.376 1.596C103.339 1.157 102.734 1.027 87.194 1H66.034Z" fill="url(#paint1_radial)"/>
										<path id="Vector_3" d="M66.004 18C52.968 18 51.332 18.057 46.212 18.29C41.102 18.524 37.614 19.333 34.562 20.52C31.405 21.746 28.727 23.386 26.059 26.055C23.389 28.723 21.749 31.401 20.519 34.557C19.329 37.61 18.519 41.099 18.289 46.207C18.06 51.327 18 52.964 18 66C18 79.036 18.058 80.667 18.29 85.787C18.525 90.897 19.334 94.385 20.52 97.437C21.747 100.594 23.387 103.272 26.056 105.94C28.723 108.61 31.401 110.254 34.556 111.48C37.61 112.667 41.099 113.476 46.208 113.71C51.328 113.943 52.963 114 65.998 114C79.035 114 80.666 113.943 85.786 113.71C90.896 113.476 94.388 112.667 97.442 111.48C100.598 110.254 103.272 108.61 105.939 105.94C108.609 103.272 110.249 100.594 111.479 97.438C112.659 94.385 113.469 90.896 113.709 85.788C113.939 80.668 113.999 79.036 113.999 66C113.999 52.964 113.939 51.328 113.709 46.208C113.469 41.098 112.659 37.61 111.479 34.558C110.249 31.401 108.609 28.723 105.939 26.055C103.269 23.385 100.599 21.745 97.439 20.52C94.379 19.333 90.889 18.524 85.779 18.29C80.659 18.057 79.029 18 65.989 18H66.004ZM61.698 26.65C62.976 26.648 64.402 26.65 66.004 26.65C78.82 26.65 80.339 26.696 85.4 26.926C90.08 27.14 92.62 27.922 94.312 28.579C96.552 29.449 98.149 30.489 99.828 32.169C101.508 33.849 102.548 35.449 103.42 37.689C104.077 39.379 104.86 41.919 105.073 46.599C105.303 51.659 105.353 53.179 105.353 65.989C105.353 78.799 105.303 80.319 105.073 85.379C104.859 90.059 104.077 92.599 103.42 94.289C102.55 96.529 101.508 98.124 99.828 99.803C98.148 101.483 96.553 102.523 94.312 103.393C92.622 104.053 90.08 104.833 85.4 105.047C80.34 105.277 78.82 105.327 66.004 105.327C53.187 105.327 51.668 105.277 46.608 105.047C41.928 104.831 39.388 104.049 37.695 103.392C35.455 102.522 33.855 101.482 32.175 99.802C30.495 98.122 29.455 96.526 28.583 94.285C27.926 92.595 27.143 90.055 26.93 85.375C26.7 80.315 26.654 78.795 26.654 65.977C26.654 53.159 26.7 51.647 26.93 46.587C27.144 41.907 27.926 39.367 28.583 37.675C29.453 35.435 30.495 33.835 32.175 32.155C33.855 30.475 35.455 29.435 37.695 28.563C39.387 27.903 41.928 27.123 46.608 26.908C51.036 26.708 52.752 26.648 61.698 26.638V26.65ZM91.626 34.62C88.446 34.62 85.866 37.197 85.866 40.378C85.866 43.558 88.446 46.138 91.626 46.138C94.806 46.138 97.386 43.558 97.386 40.378C97.386 37.198 94.806 34.618 91.626 34.618V34.62ZM66.004 41.35C52.391 41.35 41.354 52.387 41.354 66C41.354 79.613 52.391 90.645 66.004 90.645C79.617 90.645 90.65 79.613 90.65 66C90.65 52.387 79.616 41.35 66.003 41.35H66.004ZM66.004 50C74.84 50 82.004 57.163 82.004 66C82.004 74.836 74.84 82 66.004 82C57.167 82 50.004 74.836 50.004 66C50.004 57.163 57.167 50 66.004 50V50Z" fill="white"/>
										</g>
										<defs>
										<radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.5385 141.001) rotate(-90) scale(128.829 119.853)">
										<stop stop-color="#FFDD55"/>
										<stop offset="0.1" stop-color="#FFDD55"/>
										<stop offset="0.5" stop-color="#FF543E"/>
										<stop offset="1" stop-color="#C837AB"/>
										</radialGradient>
										<radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-20.7792 10.3642) rotate(78.6776) scale(57.5876 237.438)">
										<stop stop-color="#3771C8"/>
										<stop offset="0.128" stop-color="#3771C8"/>
										<stop offset="1" stop-color="#6600FF" stop-opacity="0"/>
										</radialGradient>
										</defs>
										</svg>
									</a>
										
									<a href="linkedin.com">
										<svg width="24px" height="24px" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="80" height="80" fill="#E5E5E5"/>
										<g id="LinkedIn_Logo 1">
										<g id="layer1">
										<g id="g3019">
										<path id="path14" d="M0 7.51265C0 4.47642 2.64675 2.0136 5.91184 2.0136H74.0881C77.3531 2.0136 80 4.47642 80 7.51265V73.2807C80 76.318 77.3531 78.7798 74.0881 78.7798H5.91184C2.64675 78.7798 0 76.318 0 73.2807V7.51265V7.51265Z" fill="#006699"/>
										<path id="path28" fill-rule="evenodd" clip-rule="evenodd" d="M24.2505 66.2748V31.6106H12.1672V66.2748H24.2505V66.2748ZM18.2088 26.8778C22.4225 26.8778 25.0452 24.216 25.0452 20.8895C24.9667 17.4881 22.4225 14.9001 18.2888 14.9001C14.1554 14.9001 11.4529 17.4881 11.4529 20.8895C11.4529 24.216 14.0751 26.8778 18.1301 26.8778H18.2086H18.2088Z" fill="white"/>
										<path id="path30" fill-rule="evenodd" clip-rule="evenodd" d="M30.9366 66.2748H43.0198V46.9169C43.0198 45.8809 43.0983 44.8459 43.4174 44.1053C44.2909 42.0353 46.2791 39.8915 49.6171 39.8915C53.9895 39.8915 55.7386 43.0703 55.7386 47.7303V66.2748H67.8208V46.3989C67.8208 35.7516 61.8595 30.7972 53.9097 30.7972C47.3911 30.7972 44.5294 34.2714 42.9394 36.6378H43.0201V31.6106H30.937C31.0955 34.8633 30.937 66.2748 30.937 66.2748H30.9366Z" fill="white"/>
										</g>
										</g>
										</g>
										</svg>
									</a>

									<a href="twitter.com">
										<svg width="24px" viewBox="0 0 172 140" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g id="Twitter_bird_logo_2012 1" clip-path="url(#clip0)">
										<g id="layer1">
										<path id="path5" d="M171.505 16.4988C165.196 19.2978 158.414 21.1887 151.297 22.0393C158.561 17.6848 164.141 10.7894 166.768 2.5726C159.968 6.60555 152.438 9.53313 144.423 11.111C138.005 4.2722 128.861 0 118.74 0C99.3084 0 83.553 15.7536 83.553 35.1852C83.553 37.9431 83.8643 40.6288 84.4646 43.204C55.2211 41.7368 29.2946 27.7282 11.9399 6.44003C8.91115 11.6367 7.17551 17.6805 7.17551 24.1292C7.17551 36.3369 13.3874 47.1066 22.8288 53.4163C17.0611 53.2336 11.6355 51.6507 6.89166 49.0155C6.88766 49.1621 6.88766 49.3096 6.88766 49.4579C6.88766 66.5056 19.0166 80.726 35.1132 83.9606C32.1608 84.765 29.0522 85.1946 25.8433 85.1946C23.576 85.1946 21.3722 84.9733 19.2232 84.5634C23.7012 98.542 36.6954 108.715 52.0931 108.998C40.0509 118.436 24.8795 124.061 8.39349 124.061C5.55335 124.061 2.75267 123.894 0 123.569C15.5719 133.553 34.067 139.378 53.9377 139.378C118.658 139.378 154.051 85.7631 154.051 39.2645C154.051 37.739 154.016 36.222 153.949 34.7119C160.823 29.7519 166.788 23.5554 171.505 16.4988H171.505Z" fill="#2AA9E0"></path>
										</g>
										</g>
										<defs>
										<clipPath id="clip0">
										<rect width="171.505" height="139.378" fill="white"></rect>
										</clipPath>
										</defs>
										</svg>
									</a>

								</div>
			                    <div class="project-intro">
			                        <div class="row">
			                            <div class="column small-12 medium-2 text-center">
			                                <div class="project-intro__logo"> <img src=""> </div>
			                            </div>
			                            <div class="column small-12 medium-7 project-banner__col-content">
			                                <div class="project-intro__title"></div>
			                                <div class="project-intro__pitch"></div>
			                                <div class="project-categories">
											    <div class="project-category">
											        <div class="project-category__title"> Tracks </div>
											        <div class="project-category__options">
											        </div>
											    </div>
											</div>
			                            </div>
			                            <div class="column small-12 medium-3 text-center"></div>
			                        </div>
			                    </div>
			                </div>
			                <div class="project-content">
			                    <div class="row">
			                        <div class="column small-12">
			                            <h2 class="project-section__title title--line"> <span class="project-section__title-icon icon--content">
			                            	<div class="idt-icon">
                                                <i class="far fa-lightbulb" style="color: white;position: relative;top: 6px;"></i>
                                            </div>
			                            </span> <br> <span>About the Idea</span> </h2>
			                        </div>
			                    </div>
			                    <div class="row align-center">
			                        <div class="column small-12 large-8">
			                            <div class="project-post post--issue">
			                                <h3 class="project-post__title title--issue"> <span class="project-post__title-vertical title-vertical--issue">the</span> Issue </h3>
			                                <div class="project-post__content"></div>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="row align-center">
			                        <div class="column small-12 large-8">
			                            <div class="project-post post--solution">
			                                <div class="row align-middle">
			                                    <div class="column small-12 medium-5">
			                                        <h3 class="project-post__title title--solution" style="line-height:100%"> Our Magic Solution </h3>
			                                    </div>
			                                    <div class="column small-12 medium-7">
				                                    <div class="project-post__content align-left"></div>
			                                    </div>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="container">
			                        <div class="row align-center">
			                            <div class="column small-12 medium-10">
			                                <div class="project-post post--hiw">
			                                    <h3 class="project-post__title title--hiw">How it works</h3>
			                                    <ul class="project-hiw__list list--3">
			                                        <li class="project-hiw__list-item project-hiw__list-item1">
			                                            <div class="project-hiw">
			                                                <div class="project-hiw__wrap-image">
			                                                    <img class="project-hiw__image" src=""> 
			                                                    <div class="project-hiw__number">1</div>
			                                                </div>
			                                                <div class="project-hiw__title"></div>
			                                                <p class="project-hiw__content"></p>
			                                            </div>
			                                        </li>
			                                        <li class="project-hiw__list-item project-hiw__list-item2">
			                                            <div class="project-hiw">
			                                                <div class="project-hiw__wrap-image">
			                                                    <img class="project-hiw__image" src=""> 
			                                                    <div class="project-hiw__number">2</div>
			                                                </div>
			                                                <div class="project-hiw__title"></div>
			                                                <p class="project-hiw__content"></p>
			                                            </div>
			                                        </li>
			                                        <li class="project-hiw__list-item project-hiw__list-item3">
			                                            <div class="project-hiw">
			                                                <div class="project-hiw__wrap-image">
			                                                    <img class="project-hiw__image" src=""> 
			                                                    <div class="project-hiw__number">3</div>
			                                                </div>
			                                                <div class="project-hiw__title"></div>
			                                                <p class="project-hiw__content"></p>
			                                            </div>
			                                        </li>
			                                    </ul>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="project-presentation">
			                        <div class="row">
			                            <div class="column small-12">
			                                <h2 class="project-section__title title--slideshare"> <span class="project-section__title-icon icon--slideshare">
			                                	<div class="idt-icon">
                                                    <i class="far fa-comment" style="color: white;position: relative;top: 2px;"></i>
                                                </div>
			                                </span> <br> <span>Presentation</span> </h2>
			                                <div class="embed-responsive embed-responsive-autosize project-presentation__slideshare"></div>
			                                <style>
											  .embed-responsive {
											    position: relative;
											    padding-bottom: 56.25%; /* 16:9 Ratio */
											    height: 0;
											    overflow: hidden;
											  }
											  .embed-responsive iframe {
											    border: 0;
											    position: absolute;
											    top: 0;
											    left: 0;
											    width: 100% !important;
											    height: 100% !important;
											  }
											</style>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="project-team">
			                        <div class="row">
			                            <div class="column small-12">
			                                <h2 class="project-section__title title--team title--line">
			                                	<span class="project-section__title-icon icon--team">
			                                		<div class="idt-icon">
	                                                    <i class="fas fa-users" style="color: white;position: relative;top: 5px;"></i>
	                                                </div>
			                                	</span>
			                                	<br>
			                                	<span>Our team</span>
			                                </h2>
			                                <p class="text-center"> No teammates yet </p>
			                            </div>
			                            <div class="column small-12">
			                                <hr>
			                                <ul class="project-hires public" id="hiring">
			                                </ul>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </form>
			        </div>
			    </div>
			</idt-page>
			<?php get_footer(); ?>
    	</div>
		<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
		<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
		<script src="/wp-content/themes/MindEmpathy-wp/static/js/jquery.js"></script>
		<script src="https://sdk.amazonaws.com/js/aws-sdk-2.766.0.min.js"></script>
		<script src="/wp-content/themes/MindEmpathy-wp/static/js/clean-blog.js"></script>
		<script src="/wp-content/themes/MindEmpathy-wp/static/js/sidebar.js"></script>
		<script src="/wp-content/themes/MindEmpathy-wp/static/js/viewideas.js"></script>
	</body>
</html>