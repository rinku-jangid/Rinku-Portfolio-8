/* Custom General jQuery
-------------------------------------------------------------------*/
;(function($) {
	$(document).ready( function(e) {
			/* Header Sticky */
			$(window).scroll(function() {
				if ($(this).scrollTop() > 1){  
					$('.header1').addClass("sticky");
				  }
				  else{
					$('.header1').removeClass("sticky");
				  }
			});
		
/*-------------------------------------------------------------------*/
});
})(jQuery);