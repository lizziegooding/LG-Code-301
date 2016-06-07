//Once page has loaded, anonymous function will run
$(function() {
  //Select lis with class=hot and replace all child html with the given string (will apply any included tags)
  $('li.hot').html('<i>.html() method</i>');
  //Select lis with class=cold and replace all child text with the given string (will NOT apply any included tags)
  $('li.cold').text('<i>.text() method</i>');
});
