//Once page has loaded, anonymous function will run
$(function() {
  //Select h2 element and add an id of 'two'
  $('h2').attr('id','two');
  //Select h1 element and remove the id attribute
  $('h1').removeAttr('id');
});
