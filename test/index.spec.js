var assert = require("chai").assert;
var quixote = require("quixote/src/quixote");

describe("Main behaviour", function() {

  var frame;
  var container;

  var positiveNumbers = [];
  var i = 0;
  while(positiveNumbers.push(5 * i++)<201); // array of integers from 0 to 1000 px

  var numbers = [];
  var i = -200;
  while(numbers.push(5 * i++)<201); // array of integers from -1000 to 1000 px



  before(function(done) {
    frame = quixote.createFrame({
      stylesheet: "/base/bin/semantic-css-helpers.min.css"
    }, done);
  });

  after(function() {
    frame.remove();
  });

  beforeEach(function() {
    frame.reset();

    // PADDING
    positiveNumbers.forEach(function(i){ div = "<div class='p-l-" + i + "'></div>"; frame.add(div); });
    positiveNumbers.forEach(function(i){ div = "<div class='p-r-" + i + "'></div>"; frame.add(div); });
    positiveNumbers.forEach(function(i){ div = "<div class='p-t-" + i + "'></div>"; frame.add(div); });
    positiveNumbers.forEach(function(i){ div = "<div class='p-b-" + i + "'></div>"; frame.add(div); });
 
    // MARGIN
    numbers.forEach(function(i){ div = "<div class='m-l-" + i + "'></div>"; frame.add(div); });
    numbers.forEach(function(i){ div = "<div class='m-r-" + i + "'></div>"; frame.add(div); });
    numbers.forEach(function(i){ div = "<div class='m-t-" + i + "'></div>"; frame.add(div); });
    numbers.forEach(function(i){ div = "<div class='m-b-" + i + "'></div>"; frame.add(div); });
  });


  positiveNumbers.forEach(function(i){
    it("has padding-left offsets", function(){
      assert.equal(frame.get(".p-l-" + i).getRawStyle("padding-left"), i + "px");
    });
    it("has padding-right offsets", function(){
      assert.equal(frame.get(".p-r-" + i).getRawStyle("padding-right"), i + "px");
    });
    it("has padding-top offsets", function(){
      assert.equal(frame.get(".p-t-" + i).getRawStyle("padding-top"), i + "px");
    });
    it("has padding-bottom offsets", function(){
      assert.equal(frame.get(".p-b-" + i).getRawStyle("padding-bottom"), i + "px");
    });
  });


  numbers.forEach(function(i){
    it("has margin-left offsets", function(){
      assert.equal(frame.get(".m-l-" + i).getRawStyle("margin-left"), i + "px");
    });
    it("has margin-right offsets", function(){
      assert.equal(frame.get(".m-r-" + i).getRawStyle("margin-right"), i + "px");
    });
    it("has margin-top offsets", function(){
      assert.equal(frame.get(".m-t-" + i).getRawStyle("margin-top"), i + "px");
    });
    it("has margin-bottom offsets", function(){
      assert.equal(frame.get(".m-b-" + i).getRawStyle("margin-bottom"), i + "px");
    });
  });

});
