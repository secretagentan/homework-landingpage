$(document).ready(function(){
	// $(".hide").hide();
	$(".read-more").click(showMore);
	$(".read-less").click(showLess);
	$(".learn-more").click(showLearn);


	function showMore(){
		event.preventDefault();
		$(".read-more").hide();
		$("#show-this-on-click").slideDown();
		$(".read-less").show();
	}
	function showLess(){
		event.preventDefault();
		$(".read-less").hide();
		$("#show-this-on-click").slideUp();
		$(".read-more").show();
	}
	function showLearn(){
		event.preventDefault();
		$(".learn-more").hide();
		$("#learn-more-text").slideDown();
	}









})