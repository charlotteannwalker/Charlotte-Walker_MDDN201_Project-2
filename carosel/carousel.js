// $ means JQuery.

// Make sure all of your code that interacts with the page is wrapped in a function like this.
// Otherwise it will run before the page has loaded, and the elements you're looking for won't be there!
$(function () {
	$("#carousel").slick({
		arrows: true,
		dots: true,
	
		
	});
});

// From the slick website, manipulated to adjust the number of images shown and the soeed of the autoplay. Added the dots and arrows + centerMode.

$(function () {
	
$('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
 
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 1200,
});
});
	
	
	