$('li[id!="one"]') //select all li elements that do not have an id of 'one'
  .hide() //hide the selected elements
  .delay(500) //delay any action by 500 milliseconds
  .fadeIn(1400); // fade in (make more opaque) the action over 1400 milliseconds
$('li:first-child').addClass('next'); //to the first child of all the li tags, add the class 'next'
$('li.priority').addClass('highlight');//to all li tags with the class 'priority', add the class highlight
