// Sandbox for app1
$(document).ready(function() {
  // Create an app that creates an object (call it "X") with at least two properties and one method. Use the built-in Javascript object "JSON" to generate a JSON string from X. Use .replace(), a method of all JS String objects, to change one of the keys inside the JSON string. Then use the JSON object to create a new object "Y" from the modified JSON string, and print the contents of Y (use Y when you print, and not the modified JSON string).
  var X = {
    name: 'Pete',
    married: true,
    hasKids: function(){
      console.log('Not yet but soon!');
    }};
  console.log('X', X);
  var jsonX = JSON.stringify(X);
  console.log('jsonX :', jsonX);
  jsonX = jsonX.replace(/married/, 'divorced');
  var Y = JSON.parse(jsonX);
  console.log('Y: ', Y);
});
