// Sandbox for app2
// a. Use a constructor and a loop to create an array of objects, then stringify the entire array and print the string to the console or DOM. Copy-and-paste the entire JSON string from that "print out" into a new file "myData.json" that you save on your laptop.
// b. Use jQuery's .getJSON() to load myData.json, and use .done() to set up a function F to run when the data is ready; F should call a function "P" to print the contents of the entire array of objects using a loop or .map().
$(document).ready(function() {
  var Book = function() {
    this.author = 'John Steinbeck';
    this.title = 'Grapes of Wrath';
    this.pubYear = 1939;
  };
  var bookShelf = [];
  for (var i = 0; i < 10; i++){
    bookShelf.push(new Book);
  }
  console.log('As a JS object: ', bookShelf);
  var jsonBookShelf = JSON.stringify(bookShelf);
  console.log('As a JSON string: ', jsonBookShelf);

  function loadBooks(){
    $.getJSON('bookShelf.json')
    .done(P)
    .fail(function(){
      console.log('Sorry, that didn\'t work!');
    });
  };

  function P(array){
    console.log('Print from written json: ');
    for(var x = 0; x < array.length; x++){
      console.log(array[x]);
    };
  };
  loadBooks();

// Modify #3 to use jQuery's .ajax() to load myData.json, instead of using .getJSON(). Pay attention to the pieces of code you need to make .ajax() behave like .getJSON().
  function loadBooksAjax(){
    $.ajax({
      type: 'GET',
      url: 'bookShelf.json',
      timeout: 2000,
      error: function(){
        console.log('Sorry, that didn\'t work!');
      },
      success: function(){
        console.log('Running .ajax call');
      }
    });
  };
  loadBooksAjax();
});
