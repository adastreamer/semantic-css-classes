var assert = require("chai").assert;
var quixote = require("quixote/src/quixote");

describe("Main behaviour", function() {

  var frame;
  var container;

  var positiveNumbers = [];
  var i = 0;
  while(positiveNumbers.push(5 * i++) < 201); // array of integers from 0 to 1000 px

  var numbers = [];
  var i = -200;
  while(numbers.push(5 * i++) < 401); // array of integers from -1000 to 1000 px



  before(function(done) {
    frame = quixote.createFrame({
      stylesheet: "/base/bin/semantic-css-classes.min.css"
    }, done);
  });

  after(function() {
    frame.remove();
  });

  var alreadyFilled = false;

  beforeEach(function() {
    if (alreadyFilled){
      return;
    }

    frame.reset();

    // PADDINGS
    positiveNumbers.forEach(function(i){
      frame.add("<div class='p-l-" + i + "'></div>");
      frame.add("<div class='p-r-" + i + "'></div>");
      frame.add("<div class='p-t-" + i + "'></div>");
      frame.add("<div class='p-b-" + i + "'></div>");

      // with !important
      // add some incorrect styles to be sure that !important works properly
      frame.add("<style> \
        .p-l-" + i + "i{ padding-left: 987789px; } \
        .p-r-" + i + "i{ padding-right: 987789px; } \
        .p-t-" + i + "i{ padding-top: 987789px; } \
        .p-b-" + i + "i{ padding-bottom: 987789px; } \
      </style>");

      frame.add("<div class='p-l-" + i + "i'></div>");
      frame.add("<div class='p-r-" + i + "i'></div>");
      frame.add("<div class='p-t-" + i + "i'></div>");
      frame.add("<div class='p-b-" + i + "i'></div>");
    });

    // MARGINS
    numbers.forEach(function(i){
      frame.add("<div class='m-l-" + i + "'></div>");
      frame.add("<div class='m-r-" + i + "'></div>");
      frame.add("<div class='m-t-" + i + "'></div>");
      frame.add("<div class='m-b-" + i + "'></div>");

      // with !important
      // add some incorrect styles to be sure that !important works properly
      frame.add("<style> \
        .m-l-" + i + "i{ margin-left: 987789px; } \
        .m-r-" + i + "i{ margin-right: 987789px; } \
        .m-t-" + i + "i{ margin-top: 987789px; } \
        .m-b-" + i + "i{ margin-bottom: 987789px; } \
      </style>");

      frame.add("<div class='m-l-" + i + "i'></div>");
      frame.add("<div class='m-r-" + i + "i'></div>");
      frame.add("<div class='m-t-" + i + "i'></div>");
      frame.add("<div class='m-b-" + i + "i'></div>");
    });

    // POSITIONS
    numbers.forEach(function(i){

      // with !important
      // add some incorrect styles to be sure that !important works properly
      frame.add("<style> \
        .l-" + i + "{ position: relative; } \
        .r-" + i + "{ position: relative; } \
        .t-" + i + "{ position: relative; } \
        .b-" + i + "{ position: relative; } \
        \
        .l-" + i + "i{ position: relative; left: 987789px; } \
        .r-" + i + "i{ position: relative; right: 987789px; } \
        .t-" + i + "i{ position: relative; top: 987789px; } \
        .b-" + i + "i{ position: relative; bottom: 987789px; } \
      </style>");

      frame.add("<div class='l-" + i + "'></div>");
      frame.add("<div class='r-" + i + "'></div>");
      frame.add("<div class='t-" + i + "'></div>");
      frame.add("<div class='b-" + i + "'></div>");

      frame.add("<div class='l-" + i + "i'></div>");
      frame.add("<div class='r-" + i + "i'></div>");
      frame.add("<div class='t-" + i + "i'></div>");
      frame.add("<div class='b-" + i + "i'></div>");
    });

    alreadyFilled = true;
  });


  positiveNumbers.forEach(function(i){
    it("has right paddings", function(){
      assert.equal(frame.get(".p-l-" + i).getRawStyle("padding-left"), i + "px");
      assert.equal(frame.get(".p-r-" + i).getRawStyle("padding-right"), i + "px");
      assert.equal(frame.get(".p-t-" + i).getRawStyle("padding-top"), i + "px");
      assert.equal(frame.get(".p-b-" + i).getRawStyle("padding-bottom"), i + "px");

      assert.equal(frame.get(".p-l-" + i + 'i').getRawStyle("padding-left"), i + "px");
      assert.equal(frame.get(".p-r-" + i + 'i').getRawStyle("padding-right"), i + "px");
      assert.equal(frame.get(".p-t-" + i + 'i').getRawStyle("padding-top"), i + "px");
      assert.equal(frame.get(".p-b-" + i + 'i').getRawStyle("padding-bottom"), i + "px");
    });
  });

  numbers.forEach(function(i){
    it("has right margins", function(){
      assert.equal(frame.get(".m-l-" + i).getRawStyle("margin-left"), i + "px");
      assert.equal(frame.get(".m-r-" + i).getRawStyle("margin-right"), i + "px");
      assert.equal(frame.get(".m-t-" + i).getRawStyle("margin-top"), i + "px");
      assert.equal(frame.get(".m-b-" + i).getRawStyle("margin-bottom"), i + "px");

      assert.equal(frame.get(".m-l-" + i + 'i').getRawStyle("margin-left"), i + "px");
      assert.equal(frame.get(".m-r-" + i + 'i').getRawStyle("margin-right"), i + "px");
      assert.equal(frame.get(".m-t-" + i + 'i').getRawStyle("margin-top"), i + "px");
      assert.equal(frame.get(".m-b-" + i + 'i').getRawStyle("margin-bottom"), i + "px");
    });
  });

  numbers.forEach(function(i){
    it("has right positions", function(){
      assert.equal(frame.get(".l-" + i).getRawStyle("left"), i + "px");
      assert.equal(frame.get(".r-" + i).getRawStyle("right"), i + "px");
      assert.equal(frame.get(".t-" + i).getRawStyle("top"), i + "px");
      assert.equal(frame.get(".b-" + i).getRawStyle("bottom"), i + "px");

      assert.equal(frame.get(".l-" + i + 'i').getRawStyle("left"), i + "px");
      assert.equal(frame.get(".r-" + i + 'i').getRawStyle("right"), i + "px");
      assert.equal(frame.get(".t-" + i + 'i').getRawStyle("top"), i + "px");
      assert.equal(frame.get(".b-" + i + 'i').getRawStyle("bottom"), i + "px");
    });
  });

});
