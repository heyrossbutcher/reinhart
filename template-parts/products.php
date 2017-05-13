<section class="products cursor-on clearfix" id="products">

	<div class="products--marker">
		<ul class="products--marker-list">
				
		</ul>
	</div>
	<div class="products--starter-container">
		<div class="products--starter">
			<div class="products--starter--title clearfix">
				<div class="logo-holder"><img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/heyross/img/reinharts-biege.svg" alt=""></div>
				<div class="title-holder"><img src="<?php bloginfo( 'url' ); ?>/wp-content/themes/heyross/img/products.svg" alt=""></div>
				<div class="the-cta"><p>Click to see more </p>
				<!-- <div class="go-right"><img src="http://localhost:8888/084-Reinhart/Production/wp-content/themes/heyross/img/ctaArrow.png" alt=""></div> -->
				</div>
			</div>
		</div>
		<div class="products--starter-image" style="background-image: url(<?php bloginfo( 'url' ); ?>/wp-content/themes/heyross/img/theTray.jpg)"></div>
	</div>
	
	<div class="products--hider">
		<?php 
		?>
		<div class="products--slider flexslider flexslider-products">
			<ul class="slides clearfix">
			<?php
				if ($products->have_posts()) : while ($products->have_posts()) : $products->the_post();
					$thumb_id = get_post_thumbnail_id();
					$thumb_url = wp_get_attachment_image_src($thumb_id, 'large', true);
					$theTitle = get_the_title();
					$theCopy = get_the_content();
					$bgColour = get_field('background_colour');
					$illColour = get_field('illustration_background');
					if($illColour == 'grey'){
						$bgIllo = 'can-bg-grey';
					} else {
						$bgIllo = 'can-bg-gold';
					}
					echo '<li class="clearfix">';
					echo '<div class="slide-image" style="background-color:#'.$bgColour.'; background-image: url(http://localhost:8888/084-Reinhart/Production/wp-content/themes/heyross/img/'.$bgIllo.'.png)">';
					echo '<img src="'.$thumb_url[0].'" alt="">';
					echo '</div>';
					echo '<div class="slide-info">';
					echo '<div class="info-wrapper">';
					echo '<h2>'.$theTitle.'</h2>';
					echo '<p>'.$theCopy.'</p>';
					echo '</div>';
					echo '</div>';
					echo '</li>';
				endwhile;
				endif;
			 ?>
			</ul>
		</div>
	</div>
</section>
