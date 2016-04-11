var assert = require("chai").assert;
var quixote = require("quixote/src/quixote");

describe("Main behaviour", function() {

  var frame;
  var container;
  var button;

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
    container = frame.add(
      "<div class='p-l-20' id='p-l-20'></div>" +
      ""
    );
    buttonPL20 = frame.get("#p-l-20");
  });

  it("has the right offsets", function() {
    assert.equal(buttonPL20.getRawStyle("padding-left"), "20px", "should have 20px padding-left");
  });

});
