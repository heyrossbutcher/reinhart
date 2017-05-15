<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package heyross
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,700" rel="stylesheet">
<link rel="stylesheet" href="<?php bloginfo( 'url' ); ?>/wp-content/themes/heyross/flexslider.css" type="text/css">
<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
<div class="ageSelect">
	<div class="ageWrapper">
		<?php require_once('template-parts/ageSelect.php'); ?>
	</div>
</div>
<div class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
	<div class="prong prong-1"></div>
	<div class="prong prong-2"></div>
	<div class="prong prong-3"></div>
</div>
<div class="mobile-fixed-wrapper">
	<div class="mobile-nav">
		<?php wp_nav_menu( array( 'theme_location' => 'menu-1', 'menu_id' => 'primary-menu') ); ?>
	</div> 
</div>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'heyross' ); ?></a>

	<header id="masthead" class="site-header clearfix" role="banner">
		<div class="nav-container clearfix">
			<div class="site-branding">
				<?php
				if ( is_front_page() && is_home() ) : ?>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><h1 class="site-title"><img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/heyross/img/logo.svg" alt=""></h1></a>
				<?php else : ?>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><p class="site-title"><img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/heyross/img/logo.svg" alt=""></p></a>
				<?php
				endif;

				$description = get_bloginfo( 'description', 'display' );
				if ( $description || is_customize_preview() ) : ?>
					<p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
				<?php
				endif; ?>
			</div><!-- .site-branding -->

			<nav id="site-navigation" class="main-navigation" role="navigation">
				<?php wp_nav_menu( array( 'theme_location' => 'menu-1', 'menu_id' => 'primary-menu' ) ); ?>
			</nav><!-- #site-navigation -->


		</div>
	</header><!-- #masthead -->

	<div id="content" class="site-content">
