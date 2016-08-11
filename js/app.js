'use strict'

$(document).ready(function() {

	var pages = ['first-page', 'second-page', 'third-page'];

	for (var i = 0; i < pages.length; i++) {
		var page = $('#' + pages[i]);


		$(page).find('.btn').click(function() {

			// https://api.jquery.com/closest/
			var page = $(this).closest('section')
			// https://api.jquery.com/next/
			var nextPage = $(page).next()

			$(page).fadeOut(1000);
			$(nextPage).fadeIn(1000);

		});

	}

})