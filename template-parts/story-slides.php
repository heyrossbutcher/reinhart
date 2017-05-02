<?php
	if ($latestPosts->have_posts()) : while ($latestPosts->have_posts()) : $latestPosts->the_post();
		$thumb_id = get_post_thumbnail_id();
		$thumb_url = wp_get_attachment_image_src($thumb_id, 'large', true);
		$theTitle = get_the_title();
		$theCopy = get_the_content();
		echo '<li class="clearfix">';
		echo '<div class="slide-image" style="background-image: url('.$thumb_url[0].')">';
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