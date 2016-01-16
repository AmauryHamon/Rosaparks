/*
 * main.js
 * —
 * WHERE YOU PUT YOUR ADVANCED CODE
 *
 */

$('#showImg').click(function() {
	$('#img').toggleClass('hidden');
});

var scrollInterval,
	isLeftScrolling = false,
	isRightScrolling = false;
$('.linkedScrollLeft').scroll(function() {

	if(!isRightScrolling) {
		isLeftScrolling = true;

		window.clearInterval(scrollInterval);

		scrollInterval = setInterval(function() {
			isLeftScrolling = false;
		}, 500);

		$('.linkedScrollRight').scrollTop(($('.linkedScrollRight')[0].scrollHeight - window.innerHeight) * $('.linkedScrollLeft').scrollTop() / ($('.linkedScrollLeft')[0].scrollHeight - window.innerHeight));
	}

});

$('.linkedScrollRight').scroll(function() {

	if(!isLeftScrolling) {
		isRightScrolling = true;

		window.clearInterval(scrollInterval);
		
		scrollInterval = setInterval(function() {
			isRightScrolling = false;
		}, 500);

		$('.linkedScrollLeft').scrollTop(($('.linkedScrollLeft')[0].scrollHeight - window.innerHeight) * $('.linkedScrollRight').scrollTop() / ($('.linkedScrollRight')[0].scrollHeight - window.innerHeight));
	}

});