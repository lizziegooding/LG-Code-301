//Once page has loaded...
$(function() {
  //Use jQuery to get #input and #output from the DOM
  var input = $('#input'); // Input area
  var output = $('#output'); // Shows rendered HTML

  //Define function that will render the highlighted markdown on the page
  function render() {
    //Get the raw Markdown from the input text area
    var inputRaw = input.val(); // Raw article markup
    // Convert markup to html using marked() function
    var inputHTML = marked(inputRaw);

    // Render article preview (rendered HTML)
    output.html(inputHTML);
    //Find each <pre><code> tag in the output jQuery element
    output.find('pre code').each(function(i, block) {
      //Apply highlighting to each block it finds. Returns an object with language, relevance, value (HTML string), and top properties; value HTML string is then rendered in the DOM
      hljs.highlightBlock(block); // Syntax-highlight each code block "in place"
    });
  }

  // Only update output when the button is clicked
  $('button').on('click', render);

  render(); // Render once on doc load
});
