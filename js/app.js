'use strict'

/*$(document).ready(function() {
	$('#first-page-btn').click(function() {
		$('#first-page').fadeOut(1000);
		$('#second-page').fadeIn(1000);
	})
	$('#second-page-btn').click(function() {
		$('#second-page').fadeOut(1000);
		$('#third-page').fadeIn(1000);
	})
	$('#third-page-btn').click(function() {
		$('#third-page').fadeOut(1000);
		$('#first-page').fadeIn(1000);
	})
})*/


	//Gabe's code below

$(document).ready(function() {
	var pages = ['first-page', 'second-page', 'third-page'];
	for (var i=0; i<pages.length; i++) {
		//console.log(pages[i]);
		//console.log(pages);
		var page = $('#' + pages[i]);
		
		$(page).find('.btn').click(function() {
			var page = $(this).closest('section');
			var nextPage = $(page).next();

			$(page).fadeOut(1000);
			$(nextPage).fadeIn(1000);
		})
	}
		//console.log(page);


});
	//var firstPage = $('#' + pages[0]);
	
