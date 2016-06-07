//Once page has loaded, anonymous function will run
$(function() {
  //Select all li elements and call the 'each' method on every element returned
  $('li').each(function(){
    //within anonymous function, change the css properties of every li (this) passed to the function
    $(this).css('color', 'red');
  });
});
