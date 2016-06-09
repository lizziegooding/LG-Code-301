//Declare global variable count to keep track of gen #
var count = 0;
//Declare an anonymous function which will run when the page is loaded
$(function() {
  //When any of the divs is clicked...
  $('div').on('click', function() {
    //increase the value of count by 1 to log that another click has occured
    count += 1;
    //Search for the parent to the current generation # and append a new div
    $('#' + (count - 1)).append('<div id="' + count + '">Ancestor. Generation ' + count + '.</div>');
  });
});
