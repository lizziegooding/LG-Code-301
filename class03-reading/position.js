//Declare an anonymous function which will run when the page is loaded
$(function() {
  //Create a new variable connecting to the DOM window object
  var $window = $(window);
  //Create a new variable connecting to the DOM element with id slideAd
  var $slideAd = $('#slideAd');
  //Create an endZone by calculating the distance from the top of the footer to the top of the page, minus the height of the viewing menu, minus 500
  var endZone = $('#footer').offset().top - $window.height() - 500;
  //When the user scrolls...
  $window.on('scroll', function() {
    //If the user scrolls below the endZone
    if (endZone < $window.scrollTop()) {
      //Animate the slideAd element to slide in from the left, have it take 250 ms
      $slideAd.animate({ 'right': '0px' }, 250);
      //If the user is above the endZone
    } else {
      //Stop the previous animation, have the ad slide out to the right, have it take 250 ms
      $slideAd.stop(true).animate({ 'right': '-360px' }, 250);
    }

  });

});
