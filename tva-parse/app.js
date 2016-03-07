$(document).ready(function(){
  var parseApplicationID="cL3NutEUQB0kiTwvQb6xh2wkQe3yahehDyj6Wkya";
  var parseJavaScriptID="8baQndgyKLHWdhzdAs3i90ak0X0b0ZOv3r5B7Z51";
  Parse.initialize(parseApplicationID,parseJavaScriptID);
  var Test = Parse.Object.extend("Test");
  var test = new Test();
  test.save({
    name: "John",
    text: "hi"}, {
      success: function(object) {
        console.log("Parse.com object is saved:"+object);
      },
      error: function(object) {
        console.log("Error! Parse.com object is not saved:"+object);
      }
  });
})
