'use strict'

$(document).ready(function() {
	

	// question divs
	var questions = $(".question-container");
	
	question.each(function(index, question) {

		var question = $(question);
		var btn = question.find(".btn");
		
		var firstQuestion = $(questions[0]);
		var lastQuestion = $(questions[ questions.length - 1 ]);
		
		lastQuestion.find(".btn").click(function() {
			lastQuestion.fadeOut("slow", function() {
				firstQuestion.fadeIn("slow")
			})
		}) 
		
		btn.click(function(event) {
			
			event.preventDefault();
			
			var question = $(this).closest('section'); // $(question)
			var nextQuestion = question.next();

			$(question).fadeOut(1000, function() {
				$(nextQuestion).fadeIn(1000);
			});
			
		})
	});
	
});
