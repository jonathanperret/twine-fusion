#!/usr/bin/env node

var storydata = require('./src/storydata');

var files = process.argv.slice(2);

var datas = files.map(storydata.extractStoryData);

var merged = datas.reduce(storydata.mergeStoryDatas);

process.stdout.write(merged);
