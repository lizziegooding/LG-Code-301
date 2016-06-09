//Declare an anonymous function which will run when the page is loaded
$(function() {
  //Declare new local vairables, value undefined
  var listItem, itemStatus, eventType;
  //Find ul element in dom, on either click or mouseover, assign the selected li a status important attribute. This does not apply to the li with an id of four
  $('ul').on(
    'click mouseover',
    ':not(#four)',
    {status: 'important'},
    //Pass to the anonymous function the event object
    function(e) {
      //assign the variable listItem the given string including the event's target (the clicked/moused over li) text content
      listItem = 'Item: ' + e.target.textContent + '<br />';
      //Assign the variable itemStatus the given string including the event's new data attribute, "status : important"
      itemStatus = 'Status: ' + e.data.status + '<br />';
      //Assign the variable eventType the type of event from the event object
      eventType = 'Event: ' + e.type;
      //Replace the html in the element with id notes the string variables assigned above
      $('#notes').html(listItem + itemStatus + eventType);
    }
  );

});
