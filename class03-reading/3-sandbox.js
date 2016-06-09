//Same as app 1, animations just take 1 second now
//Declare an anonymous function which will run when the page is loaded
$(function(){
  //Add mouseover event listener to all li elements
  $('li').on('mouseover',function(){
    //Animate li element moused over
    $(this).animate({
      //Increase font size by 75%, opacity to half, left padding to 50 px over 1 second
      fontSize: '+=75%',
      opacity: '0.5',
      paddingLeft: '+=50px'
    }, 1000, function(){
      //When animation has stoped, animate the li again but this time decrease the font size by 75%
      $(this).animate({
        fontSize: '-=75%'
      }, 1000);
    });
  });
});
