//Declare an anonymous function which will run when the page is loaded
$(function(){
  //Add mouseover event listener to all li elements
  $('li').on('mouseover',function(){
    //Animate li element moused over
    $(this).animate({
      //Increase font size by 75% over 500 ms
      fontSize: '+=75%'
    }, 500, function(){
      //When animation has stoped, animate the li again but this time decrease the font size by 75%
      $(this).animate({
        fontSize: '-=75%'
      }, 500);
    });
  });
});
