var app = {};//Namespace
//
app.story = $('.story');
app.ciders = $('.ciders');
app.products = $('.products');
app.productsMarker = $('.products--marker-list');
//
app.story.on('mouseover', function(){``
	$('.story--starter').addClass('makeHalf');
	$('.story--starter-image').addClass('makeHalf');
	$('.story--starter--title .the-cta').addClass('fade-in');
});
app.story.on('mouseleave', function(){
	$('.story--starter').removeClass('makeHalf');
	$('.story--starter-image').removeClass('makeHalf');
	$('.story--starter--title .the-cta').removeClass('fade-in');
});
//
//
app.ciders.on('mouseover', function(){``
	$('.ciders--starter').addClass('makeHalf');
	$('.ciders--starter-image').addClass('makeHalf');
	$('.ciders--starter--title .the-cta').addClass('fade-in');
});
app.ciders.on('mouseleave', function(){
	$('.ciders--starter').removeClass('makeHalf');
	$('.ciders--starter-image').removeClass('makeHalf');
	$('.ciders--starter--title .the-cta').removeClass('fade-in');
});
//
//
app.products.on('mouseover', function(){
	$('.products--starter').addClass('makeHalf');
	$('.products--starter-image').addClass('makeHalf');
	$('.products--starter--title .the-cta').addClass('fade-in');
});
app.products.on('mouseleave', function(){
	$('.products--starter').removeClass('makeHalf');
	$('.products--starter-image').removeClass('makeHalf');
	$('.products--starter--title .the-cta').removeClass('fade-in');
});
//
//
app.story.on('click', function(){
	$('.story--starter-container').addClass('takeOutStoryStarter');
	$('.story--slider').addClass('bringInStorySlider');
	$('.story').removeClass('cursor-on');
});
app.ciders.on('click', function(){
	$('.ciders--starter-container').addClass('takeOutCidersStarter');
	$('.ciders--slider').addClass('bringInCidersSlider');
	$('.ciders').removeClass('cursor-on');
});
app.products.on('click', function(){
	$('.products--starter-container').addClass('takeOutProductsStarter');
	$('.products--slider').addClass('bringInProductsSliders');
	$('.cidproductsers').removeClass('cursor-on');
	$('.products--marker').addClass('show-it');
	setTimeout(function(){
		$('.products--marker').addClass('fade-in');
	}, 500);
});

//FIND THE NUMBER OF CIDERS
app.makeProductsIndex = function(){
	$('.products--slider .slides').find('[data-thumb-alt]').attr('data-counter', '1');
	var counter = 1;
	$('[data-counter=1]').each(function(){
		$(this).attr('data-counter', counter);
		counter++;
	});
}
app.changeProductsIndex = function(){
	var holder = $('.flex-active-slide').attr('data-counter');
	console.log(holder);
}

/////////////
/////////////
$('.flexslider-story').flexslider({
	slideshow: false, 
	animation: "slide"
});
//
$('.flexslider-ciders').flexslider({
	slideshow: false, 
	animation: "slide"
});
// 
$('.flexslider-products').flexslider({
	slideshow: false, 
	animation: "slide",
	before: function(){
		app.changeProductIndex();
	} 
});
// 
// APPLE ANIMATIONS
////////////////////
var tl_line = new TimelineMax(); 
//
var $leftLine = $('.apple--baseline-left');
var $rightLine = $('.apple--baseline-right');
//
var $appleHlder01 = $('.apple-01');
var $appleHlder02 = $('.apple-02');
var $appleHlder03 = $('.apple-03');
var $appleHlder04 = $('.apple-04');
var $appleHlder05 = $('.apple-05');
var $appleHlder06 = $('.apple-06');
var $appleHlder07 = $('.apple-07');
var $appleHlder08 = $('.apple-08');
var $appleHlder09 = $('.apple-09');
var $appleHlder10 = $('.apple-10');
var $appleHlder11 = $('.apple-11');
var $appleHlder12 = $('.apple-12');
//
var $introducing = $('.introducing');
var $reinhartLogo = $('.reinhart-logo');
//
tl_line.to( $leftLine, 1.5, { opacity:1 });
tl_line.to( $rightLine, 1.5, { opacity:1 }, "-=1.5");
//
var tl01 = new TimelineMax(); 
var tl02 = new TimelineMax(); 
var tl03 = new TimelineMax(); 
var tl04 = new TimelineMax(); 
var tl05 = new TimelineMax(); 
var tl06 = new TimelineMax(); 
var tl07 = new TimelineMax(); 
var tl08 = new TimelineMax(); 
var tl09 = new TimelineMax(); 
var tl10 = new TimelineMax(); 
var tl11 = new TimelineMax(); 
var tl12 = new TimelineMax(); 
//

app.animateApple = function( apple, timeline ){
	var $theApple = $('.' + apple);
	var $apple01 = $('.' + apple  + ' #apple');
	var $stem01_01 = $('.' + apple  + ' #stem01-01');
	var $stem01_02 = $('.' + apple  + ' #stem01-02');
	var $stem01_03 = $('.' + apple  + ' #stem01-03');
	var $stem01_04 = $('.' + apple  + ' #stem01-04');
	var $stem01_05 = $('.' + apple  + ' #stem01-05');
	var $stem01_06 = $('.' + apple  + ' #stem01-06');
	var $stem01_08 = $('.' + apple  + ' #stem01-08');
	var $stem01_09 = $('.' + apple  + ' #stem01-09');
	var $stem01_10 = $('.' + apple  + ' #stem01-10');
	var $stem01_11 = $('.' + apple  + ' #stem01-11');
	var $stem01_12 = $('.' + apple  + ' #stem01-12');
	//
	var $diamond = $('.' + apple  + ' #diamond');
	//
	var $stem02_01 = $('.' + apple  + ' #stem02-01');
	var $stem02_02 = $('.' + apple  + ' #stem02-02');
	var $stem02_03 = $('.' + apple  + ' #stem02-03');
	var $stem02_04 = $('.' + apple  + ' #stem02-04');
	var $stem02_05 = $('.' + apple  + ' #stem02-05');
	var $stem02_06 = $('.' + apple  + ' #stem02-06');
	var $stem02_07 = $('.' + apple  + ' #stem02-07');
	var $stem02_08 = $('.' + apple  + ' #stem02-08');
	var $stem02_09 = $('.' + apple  + ' #stem02-09');
	var $stem02_10 = $('.' + apple  + ' #stem02-10');
	var $stem02_11 = $('.' + apple  + ' #stem02-11');
	var $stem02_12 = $('.' + apple  + ' #stem02-12');
	//
	var $circle01_01 = $('.' + apple  + ' #circle01-01');
	var $circle01_02 = $('.' + apple  + ' #circle01-02');
	var $circle01_03 = $('.' + apple  + ' #circle01-03');
	var $circle01_04 = $('.' + apple  + ' #circle01-04');
	var $circle01_05 = $('.' + apple  + ' #circle01-05');
	var $circle01_06 = $('.' + apple  + ' #circle01-06');
	// 
	var $circle02_01 = $('.' + apple  + ' #circle02-01');
	var $circle02_02 = $('.' + apple  + ' #circle02-02');
	var $circle02_03 = $('.' + apple  + ' #circle02-03');
	var $circle02_04 = $('.' + apple  + ' #circle02-04');
	var $circle02_05 = $('.' + apple  + ' #circle02-05');
	var $circle02_06 = $('.' + apple  + ' #circle02-06');
	var $circle02_07 = $('.' + apple  + ' #circle02-07');
	//
	var $leaf01_01 = $('.' + apple  + ' #leaf01-01');
	var $leaf01_02 = $('.' + apple  + ' #leaf01-02');
	var $leaf01_03 = $('.' + apple  + ' #leaf01-03');
	var $leaf01_04 = $('.' + apple  + ' #leaf01-04');
	var $leaf01_05 = $('.' + apple  + ' #leaf01-05');
	var $leaf01_06 = $('.' + apple  + ' #leaf01-06');
	var $leaf01_07 = $('.' + apple  + ' #leaf01-07');
	var $leaf01_08 = $('.' + apple  + ' #leaf01-08');
	var $leaf01_09 = $('.' + apple  + ' #leaf01-09');
	var $leaf01_10 = $('.' + apple  + ' #leaf01-10');
	var $leaf01_11 = $('.' + apple  + ' #leaf01-11');
	var $leaf01_12 = $('.' + apple  + ' #leaf01-12');
	var $leaf01_13 = $('.' + apple  + ' #leaf01-13');
	var $leaf01_14 = $('.' + apple  + ' #leaf01-14');
	var $leaf01_15 = $('.' + apple  + ' #leaf01-15');
	//
	var $leaf02_01 = $('.' + apple  + ' #leaf02-01');
	var $leaf02_02 = $('.' + apple  + ' #leaf02-02');
	var $leaf02_03 = $('.' + apple  + ' #leaf02-03');
	var $leaf02_04 = $('.' + apple  + ' #leaf02-04');
	var $leaf02_05 = $('.' + apple  + ' #leaf02-05');
	var $leaf02_06 = $('.' + apple  + ' #leaf02-06');
	var $leaf02_07 = $('.' + apple  + ' #leaf02-07');
	var $leaf02_08 = $('.' + apple  + ' #leaf02-08');
	var $leaf02_09 = $('.' + apple  + ' #leaf02-09');
	var $leaf02_10 = $('.' + apple  + ' #leaf02-10');
	var $leaf02_11 = $('.' + apple  + ' #leaf02-11');
	var $leaf02_12 = $('.' + apple  + ' #leaf02-12');
	// FIRST STEM
	timeline.to( $theApple, .2, { opacity:1 } );
	timeline.fromTo( $apple01, 1, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"} );
	timeline.fromTo( $stem01_01, .5, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, "-=.4");
	timeline.fromTo( $stem01_04, .4, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"});
	timeline.fromTo( $stem01_03, .4, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, "-=.2");
	timeline.fromTo( $stem01_02, .2, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.2");
	timeline.fromTo( $stem01_05, .4, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.4");
	timeline.fromTo( $stem01_06, .2, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.4");
	timeline.fromTo( $stem01_08, .2, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.4");
	timeline.fromTo( $stem01_10, .2, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.4");
	timeline.fromTo( $stem01_09, .2, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.4");
	timeline.fromTo( $stem01_11, .2, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.4");
	timeline.fromTo( $stem01_12, .2, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.2");
	//
	timeline.fromTo( $diamond, .4, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, "-=1");
	// SECOND STEM
	timeline.fromTo( $stem02_01, .4, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, "-=1");
	timeline.fromTo( $stem02_02, .5, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, "-=1" );
	timeline.fromTo( $stem02_10, .4, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, "-=1" );
	timeline.fromTo( $stem02_03, .4, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, "-=1" );
	timeline.fromTo( $stem02_08, .4, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.5" );
	timeline.fromTo( $stem02_06, .4, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, "-=.5" );
	timeline.fromTo( $stem02_04, .4, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.5" );
	timeline.fromTo( $stem02_05, .4, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.5" );
	timeline.fromTo( $stem02_07, .4, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, "-=.5" );
	timeline.fromTo( $stem02_09, .4, {opacity:1, drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "-=.5" );
	timeline.fromTo( $stem02_11, .4, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, "-=.5" );
	timeline.fromTo( $stem02_12, .4, {opacity:1, drawSVG:"100% 100%"}, {drawSVG:"0% 100%"}, "-=.5" );
	// FIRST CIRCLES
	timeline.to( $circle01_01, .2, { opacity:1 }, "-=.4");
	timeline.to( $circle01_02, .2, { opacity:1 });
	timeline.to( $circle01_03, .2, { opacity:1 }, "-=.4");
	timeline.to( $circle01_04, .2, { opacity:1 }, "-=.4");
	timeline.to( $circle01_05, .2, { opacity:1 }, "-=.3");
	timeline.to( $circle01_06, .2, { opacity:1 }, "-=.25");
	// SECOND CIRCLES
	timeline.to( $circle02_07, .2, { opacity:1 }, "-=.65");
	timeline.to( $circle02_01, .2, { opacity:1 }, "-=.8");
	timeline.to( $circle02_02, .2, { opacity:1 });
	timeline.to( $circle02_03, .2, { opacity:1 }, "-=.8");
	timeline.to( $circle02_04, .2, { opacity:1 }, "-=.8");
	timeline.to( $circle02_05, .2, { opacity:1 }, "-=.7");
	timeline.to( $circle02_06, .2, { opacity:1 }, "-=.65");
	// FIRST LEAVES
	timeline.to( $leaf01_01, .2, { opacity:1 }, "-=1");
	timeline.to( $leaf02_01, .2, { opacity:1 }, "-=1");
	timeline.to( $leaf01_02, .2, { opacity:1 }, "-=.8");
	timeline.to( $leaf02_02, .2, { opacity:1 }, "-=.8");
	timeline.to( $leaf01_03, .2, { opacity:1 }, "-=.8");
	timeline.to( $leaf02_03, .2, { opacity:1 }, "-=.8");
	timeline.to( $leaf01_04, .2, { opacity:1 }, "-=.8");
	timeline.to( $leaf02_04, .2, { opacity:1 }, "-=.8");
	timeline.to( $leaf01_05, .2, { opacity:1 }, "-=.7");
	timeline.to( $leaf02_05, .2, { opacity:1 }, "-=.7");
	timeline.to( $leaf01_06, .2, { opacity:1 }, "-=.7");
	timeline.to( $leaf02_06, .2, { opacity:1 }, "-=.7");
	timeline.to( $leaf01_07, .2, { opacity:1 }, "-=.6");
	timeline.to( $leaf02_07, .2, { opacity:1 }, "-=.6");
	timeline.to( $leaf01_08, .2, { opacity:1 }, "-=.6");
	timeline.to( $leaf02_08, .2, { opacity:1 }, "-=.6");
	timeline.to( $leaf01_09, .2, { opacity:1 }, "-=.5");
	timeline.to( $leaf02_09, .2, { opacity:1 }, "-=.5");
	timeline.to( $leaf01_10, .2, { opacity:1 }, "-=.5");
	timeline.to( $leaf02_10, .2, { opacity:1 }, "-=.5");
	timeline.to( $leaf01_11, .2, { opacity:1 }, "-=.4");
	timeline.to( $leaf02_11, .2, { opacity:1 }, "-=.4");
	timeline.to( $leaf01_12, .2, { opacity:1 }, "-=.4");
	timeline.to( $leaf02_12, .2, { opacity:1 }, "-=.4");
	timeline.to( $leaf01_13, .2, { opacity:1 }, "-=.3");
	timeline.to( $leaf01_14, .2, { opacity:1 }, "-=.3");
	timeline.to( $leaf01_15, .2, { opacity:1 }, "-=.2");
}
//
$('.apple-12').addClass('apple-12-left');
app.animateApple('apple-12', tl12);
setTimeout( function(){ $('.apple-11').addClass('apple-11-left'); app.animateApple('apple-11', tl11) }, 200);
setTimeout( function(){ $('.apple-10').addClass('apple-10-left'); app.animateApple('apple-10', tl10) }, 400);
setTimeout( function(){ $('.apple-09').addClass('apple-09-left'); app.animateApple('apple-09', tl09) }, 800);
setTimeout( function(){ $('.apple-08').addClass('apple-08-left'); app.animateApple('apple-08', tl08) }, 1000);
setTimeout( function(){ $('.apple-07').addClass('apple-07-left'); app.animateApple('apple-07', tl07) }, 1200);
setTimeout( function(){ $('.apple-06').addClass('apple-06-left'); app.animateApple('apple-06', tl06) }, 1400);
setTimeout( function(){ $('.apple-05').addClass('apple-05-left'); app.animateApple('apple-05', tl05) }, 1600);
setTimeout( function(){ $('.apple-04').addClass('apple-04-left'); app.animateApple('apple-04', tl04) }, 1800);
setTimeout( function(){ $('.apple-03').addClass('apple-03-left'); app.animateApple('apple-03', tl03) }, 2000);
setTimeout( function(){ $('.apple-02').addClass('apple-02-left'); app.animateApple('apple-02', tl02) }, 2200);
setTimeout( function(){ $('.apple-01').addClass('apple-01-left'); app.animateApple('apple-01', tl01) }, 2240);
//
//START THE LINES MOVING
setTimeout( function(){ 
	$('.apple--baseline-left').addClass('move-left-line');
	$('.apple--baseline-right').addClass('move-right-line');
}, 5000);
//START THE APPLES MOVING
setTimeout( function(){ 
	$appleHlder01.addClass('move-left-apples');
	$appleHlder02.addClass('move-left-apples');
	$appleHlder03.addClass('move-left-apples');
	$appleHlder04.addClass('move-left-apples');
	$appleHlder05.addClass('move-left-apples');
	$appleHlder06.addClass('move-left-apples');
	//
	$appleHlder07.addClass('move-right-apples');
	$appleHlder08.addClass('move-right-apples');
	$appleHlder09.addClass('move-right-apples');
	$appleHlder10.addClass('move-right-apples');
	$appleHlder11.addClass('move-right-apples');
	$appleHlder12.addClass('move-right-apples');
}, 5250);
//SHOW LOGO
setTimeout( function(){ 
	$introducing.addClass('show-intro');
	$reinhartLogo.addClass('show-logo');
}, 6500);
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
$(function() {
	app.makeProductsIndex();
});
	
