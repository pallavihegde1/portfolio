
	/* to slide on a click*/
	$('#slider').click(function(){
		
		$("#slideContent").slideToggle();
	});
	
	/* to move to a part of a page'*/
$('a[href^="#"]').click(function(e) {
 
    $('html,body').animate({ scrollTop: jQuery(this.hash).offset().top}, 1000);
 
    return false;
 
    e.preventDefault();
 
});


