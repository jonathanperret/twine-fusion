var expect = require('expect.js');

var storydata = require('./src/storydata');

describe("Fusion", function() {
  it("can extract story data", function() {
    var sourceFile = __dirname + '/test-data/Story1.html';

    expect(storydata.extractStoryData(sourceFile)).to.match(/<tw-storydata(.|\n)*<\/tw-storydata>/m);
  });

  it("can merge storydatas", function() {
    var story1 = '<tw-storydata>' +
                   '<tw-passagedata pid="1" name="passage1">text1</tw-passagedata>' +
                 '</tw-storydata>';
    var story2 = '<tw-storydata>' +
                   '<tw-passagedata pid="2" name="passage2">text2</tw-passagedata>' +
                   '<tw-passagedata pid="3" name="passage3">text3</tw-passagedata>' +
                 '</tw-storydata>';

    expect(storydata.mergeStoryDatas(story1, story2)).to.be(
      '<tw-storydata>' +
        '<tw-passagedata pid="1" name="passage1">text1</tw-passagedata>' +
        '<tw-passagedata pid="2" name="passage2">text2</tw-passagedata>' +
        '<tw-passagedata pid="3" name="passage3">text3</tw-passagedata>' +
      '</tw-storydata>'
    );
  });
});
