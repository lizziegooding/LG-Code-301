// Sandbox for app2
$(document).ready(function() {
// .reverse() and concat()
  var myArray = [1, 2, 3, 4, 5];
  console.log('My Array: ' + myArray);
  console.log('.reverse() reverses the order of the array in place: ' + myArray.reverse());
  console.log('My Array: ' + myArray);
  console.log('.concat() returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments: ' + myArray.concat([6, 7, 8]));
  console.log('My Array: ' + myArray);
});
