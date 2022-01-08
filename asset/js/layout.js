// JavaScript Document
$(document).ready(function () {
	/* Go to Top JS START */
		$("#slideTop").hide();
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 150) {
					$('.slideTop').fadeIn();
				} else {				
					$('.slideTop').fadeOut();			
				}	
		});	
	
			// scroll body to 0px on click
			$('.slideTop').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 1000);
				return false;
			});
		});

	//scrool js
	$(".demos").click(function(e) { 
        $('html, body').animate({scrollTop: $("#homepagelayouts").offset().top}, 2000);
    });
    $(".features").click(function(e) { 
        $('html, body').animate({scrollTop: $("#feature_content").offset().top}, 2000);
    });

	/* Go to Top JS END */
	
	
	 $("a.scrollLink").click(function(){
	     $('html, body').animate({
	         scrollTop: $( $(this).attr('href') ).offset().top
	     }, 2000);
	    $('.dropdown .custom-dropdown').removeClass('open');
	    $('.expand-more').attr("aria-expanded","false");
	    $('.dropdown-menu').css("display", "none");
	 });

	/* dropdown */

	$('.dropdown').on('show.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});

	$('.dropdown').on('hide.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});
});






/*****************start animation script*******************/
function hb_animated_contents() {
	$(".hb-animate-element:in-viewport").each(function (i) {
	var $this = $(this);
	if (!$this.hasClass('hb-in-viewport')) {
		setTimeout(function () {
			$this.addClass('hb-in-viewport');
			}, 300 * i);
		}
	});
}
	
	$(document).ready(function(){
		hb_animated_contents();
	});

	$(window).scroll(function () {
		hb_animated_contents();
	});
	$(window).load(function () {
		hb_animated_contents();
	});
	
/*****************end animation script*******************/
