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

/*$(document).ready(function() {

	playAmede();
	


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
		


});*/

function playAmede() {
	$('#audio')[0].volume = 0.5;
	$('#audio')[0].load();
	$('#audio')[0].play();
}


$(document).ready(function() {

	playAmede();
	$('#begin-btn').click(function() {
		$('.header-container').fadeOut(1000);
		$('.cover-image').fadeTo("slow", .5);
		$('#q-1').fadeIn(1000);
	})
	$('#q-1-btn').click(function() {
		$('#q-1').fadeOut(1000);
		$('#q-2').fadeIn(1000);
	})
	$('#q-2-btn').click(function() {
		$('#q-2').fadeOut(1000);
		$('#q-3').fadeIn(1000);
	})
	$('#q-3-btn').click(function() {
		$('#q-3').fadeOut(1000);
	})
	/*$('#second-page-btn').click(function() {
		$('#second-page').fadeOut(1000);
		$('#third-page').fadeIn(1000);
	})
	$('#third-page-btn').click(function() {
		$('#third-page').fadeOut(1000);
		$('#first-page').fadeIn(1000);
	})*/
})
	



