// DONE: Create a JSON file that contains two articles whose bodies are in markdown format. Add Javascript code to one of the bodies (use a markdown previewer, such as the one in Atom, to verify your article body strings).
// DONE: Add a handlebars template to index.html
// DONE: Write JS that reads the objects from the JSON file. Use proper async coding.
// Add handlebars, marked, and highlight libraries, and use them to convert the markdown body to HTML.
// Add a link to the nav bar for the article page. This will make it clickable. Remember to use href, not a click handler.
// Write a route callback function that causes the articles to be rendered (show the articles and hide the other DOM elements).

var $p = $('p');
var $h2 = $('h2');
var $h3 = $('h3');
var $articles = $('#articles');

function Article (opts) {
  this.author = opts.author;
  this.title = opts.title;
  this.body = opts.body;
  this.pubYear = opts.pubYear;
}

Article.all = [];

Article.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());
  console.log('template', template);
  this.body = marked(this.body);
  return template(this);
};

Article.fetchAll = function(a) {
  console.log('calling getJSON');
  $.getJSON('data/bookShelf.json')
  .done(function(rawData){
    Article.all = rawData.map(function(ele) {
      return new Article(ele);
    });
    a();
  })
  .fail(function(){
    console.log('Problem with data');
  })
  .always(function(){
    console.log('Trying to get JSON data from server');
  });
};

function initIndexPage() {
  Article.all.forEach(function(a){
    $articles.append(a.toHtml());
    $articles.find('pre code').each(function(i, block) {
      hljs.highlightBlock(block); // Syntax-highlight each code block "in place"
    });
  });
};

function setRouteMappings() {
  page.base('/');

  page('', index);
  page('about', about);
  page('contact', contact);
  page('contact/:contactName', contact);
  page('articles', articles);
  page('*', notfound); // catch-all

  page();
}

function index() {
  $('body').children().show();
  $articles.hide();
  $h2.text('Home');
  $h3.text('aka index');
  $p.text('viewing index (home)');
}
function about() {
  $('body').children().show();
  $articles.hide();
  $h2.text('About');
  $h3.text('some things about me');
  $p.text('viewing about');
}
function contact(ctx) {
  $('body').children().show();
  $articles.hide();
  $h2.text('Contact');
  $h3.text('contact page');
  $p.text('viewing contact ' + (ctx.params.contactName || ''));
}
function articles() {
  $('body').children().hide();
  initIndexPage();
  $articles.show();
}
function notfound() {
  $p.html('<h3>OMG!</h3><p>The page at "'
              + location.hostname + location.pathname + location.search
              + '" can\'t be found (like a bridge over troubled water, ya\' know)!</p>'
              + '<img src="lost.jpg"></img>');
}

setRouteMappings();
