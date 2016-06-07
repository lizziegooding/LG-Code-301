//Once page has loaded, anonymous function will run
$(function() {
  //Select h2 element and remove it
  $('h2').remove();
  //Select the li elements where class = hot and append the given text
  $('li.hot').append('.append() ');
  //Select the li elements where class = hot and append the given text in bold-- reversed order, appears first argument must include some kind of html tags
  $('<b>appendTo()</b>').appendTo('li.hot');
});
