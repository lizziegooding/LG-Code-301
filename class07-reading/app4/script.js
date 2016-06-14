// Sandbox for app4
$(document).ready(function() {
  // .map() creates a new array with the results of calling a provided function on every element in this array.
  var myArray = [1, 2, 3, 4, 5];
  console.log('My Array: ' + myArray);
  var updateArray = myArray.map(function(ele){
    return ele += 1;
  });
  console.log('My Updated Array: ' + updateArray);
});
