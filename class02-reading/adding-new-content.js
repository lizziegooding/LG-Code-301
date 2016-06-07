//check that the page is ready
$(function() { //declare an anonymous function
  $('ul').before('<p class="notice">Just updated</p>'); //create a p element before the ul tag
  $('li.hot').prepend('+ '); //Add a '+ ' symbol before the existing text content of every li with class 'hot'
  var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>'); //create a new jQuery object for a new list item and store in variable $newListItem
  $('li:last').after($newListItem); //select the last list element and append the newListItem after it
});
