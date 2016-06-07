//Once page has loaded, anonymous function will run
$(function() {
  //Create var $li to store jquery object with selector 'li'
  var $li = $('li');
  //before the li tag, create a p to display what $li.text returns (only text content of all child elements and sub elements)
  $('ul').before('<p>This is the li tag with the .text() method:' + $li.text() + '</p>');
  //before the li tag (after above line), create a p to display what $li.html returns (all html content of the first child element it encounters)
  $('ul').before('<p>This is the li tag with the .html() method:' + $li.html() + '</p>');
});
