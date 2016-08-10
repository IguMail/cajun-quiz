'use strict'

$(document).ready(function() {
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
})