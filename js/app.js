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
	var questions = ['q-1', 'q-2', 'q-3', 'q-4', 'q-5'];
	for (var i=0; i<questions.length; i++) {
		//console.log(pages[i]);
		//console.log(pages);
		var question = $('#' + questions[i]);
		
		question.find('.btn').click(function() {
			var question = $(this).closest('section');
			var nextQuestion = question.next();

			$(question).fadeOut(1000);
			$(nextQuestion).fadeIn(1000);
		})
	}
		


});
	
	
