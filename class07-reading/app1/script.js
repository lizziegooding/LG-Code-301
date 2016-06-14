// Sandbox for app1
$(document).ready(function() {
  // .push(), .pop(), .shift(), and .unshift()
  var myArray = [1, 2, 3, 4, 5];
  console.log('My Array: ' + myArray);
  console.log('.push() adds parameter to end of array: ' + myArray.push(6));
  console.log('My Array: ' + myArray);
  console.log('.pop() removes last array element and returns it: ' + myArray.pop());
  console.log('My Array: ' + myArray);
  console.log('.shift() removes the first element from an array and returns that element: ' + myArray.shift());
  console.log('My Array: ' + myArray);
  console.log('.unshift() adds one or more elements to the beginning of an array and returns the new length of the array: ' + myArray.unshift(1));
  console.log('My Array: ' + myArray);
});
