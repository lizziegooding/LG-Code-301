//Find all lis with class not = 'hot', find their text, replace that text with 'apples
//Runs before page has fully loaded
$('li:not(".hot")').text('apples');

//Once page has loaded, remove all lis with class = 'hot'
$(function() {
  $('li.hot').remove();
});
