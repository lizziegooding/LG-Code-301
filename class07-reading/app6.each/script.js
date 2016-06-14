// Sandbox for app6.each
$(document).ready(function() {
  //.each()
  var myArray = [1, 2, 3, 4, 5];
  $.each(myArray, function(ele){
    console.log('index: ' + ele + ' value: ' + myArray[ele]);
  });
});
