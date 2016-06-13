$(function() {
  var tBody    = $('#tBody'); // Input area
  var pHrawOut = $('#pHrawOut'); // Shows raw HTML string; NOT used in the blog app
  var pMarkOut = $('#pMarkOut'); // Shows rendered HTML
  var pJson    = $('#pJson');    // Shows JSON string of object that holds "body"
  var mObj = {}; // Empty object, filled in during JSON string update

  function render() {
    var bodVal = tBody.val(); // Raw article markup
    var m = marked(bodVal); // Convert markup to html

    // Render article preview (rendered HTML)
    pMarkOut.html(m);
    //3. Finds each <pre><code> tag in the pMarkOut jQuery element
    pMarkOut.find('pre code').each(function(i, block) {
      //4. Applies highlighting to each block it finds. Returns an object with language, relevance, value (HTML string), and top properties; value HTML string is then rendered in the DOM
      hljs.highlightBlock(block); // Syntax-highlight each code block "in place"
    });

    pHrawOut.text(m); // Draw raw HTML

    // Update JSON article
    //5a. Use dot notation to assign the articleBody key a value of m, (the markup converted to HTML in line 10); user sees entered markup rendered as HTML
    mObj.articleBody = m;
    //5b. Populate the #pJson element's text with the JSON version of the mObj object. Stringify converts mObj from a javascript object to JSON format which the user can now see.
    var jsonStr = pJson.text(JSON.stringify(mObj));
  }

  // Any character change (article editing) updates the live output paragraphs
  tBody.on('input', render);

  render(); // Render once on doc load
});

//6. Do JSON, HTML raw, and HTML rendered outputs change when you type a single character? Why/why not?
//Yes, all four outpus change when you type a single character due to the 'input' event listener which registers any character change.
//7. What line(s) of code are responsible for causing the outputs to be updated?
//All lines under the render() function, lines 8 through 33
