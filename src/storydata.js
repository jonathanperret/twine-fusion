var fs = require('fs'),
    cheerio = require('cheerio');

exports.extractStoryData = function extractStoryData(file) {
  var htmlString = fs.readFileSync(file, {encoding: 'utf-8'});
  var parsedHTML = cheerio.load(htmlString);
  var data = parsedHTML.html('tw-storydata');

  if(!data) {
    throw new Error("No tw-storydata element found in " + file);
  }

  return data;
};

exports.mergeStoryDatas = function(story1, story2) {
  var $story1 = cheerio.load(story1),
      $story2 = cheerio.load(story2);
  $story1('tw-storydata').append($story2('tw-passagedata'));
  return $story1.html();
};
