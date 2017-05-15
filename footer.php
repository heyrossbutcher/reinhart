<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package heyross
 */

?>

	</div><!-- #content -->

	<div class="tower"></div>
	
	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="copy-right">&copy;<?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?> </div>
		<div class="site-info">
			<?php wp_nav_menu( array( 'theme_location' => 'menu-2', 'menu_id' => 'primary-menu' ) ); ?>
		</div><!-- .site-info -->
<!-- 		<div class="social">
			<ul>
				<li>Twitter</li>
				<li>LinkedIn</li>
			</ul>
		</div> -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<script src="<?php bloginfo( 'url' ); ?>/wp-content/themes/heyross/js/TweenMax.min.js"></script>
<script src="<?php bloginfo( 'url' ); ?>/wp-content/themes/heyross/js/DrawSVGPlugin.js"></script>
<!-- <script src="<?php bloginfo( 'url' ); ?>/wp-content/themes/heyross/js/cookie.js"></script> -->
<!-- <script src="<?php bloginfo( 'url' ); ?>/wp-content/themes/heyross/js/age.js"></script> -->
<?php wp_footer(); ?>

</body>
</html>
