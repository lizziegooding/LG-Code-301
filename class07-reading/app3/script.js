// Sandbox for app3
$(document).ready(function() {
  // .forEach()
  var myArray = [1, 2, 3, 4, 5];
  console.log('My Array: ' + myArray);
  myArray.forEach(function(ele){
    console.log('ele was: ' + ele);
    // console.log('but now it is: ' + ele);
    return ele += 1;
  });
  console.log('My Array: ' + myArray);
});
