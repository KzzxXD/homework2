$(document).ready(function(){
	$('.button-header').click(function(){
		$(this).addClass('active');
		$('html body').animate({scrollTop:$('#poll').position().top - 0}, 1200);
	});
});