// Sandbox for app5
$(document).ready(function() {
  // .filter()
  var myArray = [1, 2, 3, 4, 5];
  console.log('My Array: ' + myArray);
  var updateArray = myArray.filter(function(ele){
    return ele % 2 === 0;
  });
  console.log('My Updated Array: ' + updateArray);
});
