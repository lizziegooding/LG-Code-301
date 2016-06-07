//Once page has loaded, anonymous function will run
$(function() {
  //Select every third li element using nth child and call the 'each' method on every element returned
  $('li:nth-child(3n)').each(function(){
    //within anonymous function, change the css properties of every li (this) passed to the function
    $(this).css('background-color', 'green');
  });
});
