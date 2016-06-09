//Declare an anonymous function which will run when the page is loaded
$(function() {
  //Filter works on currently matched elements
  $('ul').filter('.hot').append(' filter!');
  //Find works on all children of currently matched elements
  $('ul').find('.hot').append(' find!');
});
