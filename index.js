var self = require("sdk/self");

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;

var child_process = require('sdk/system/child_process');
var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');

var button = buttons.ActionButton({
  id: 'mpv-link',
  label: 'Open with mpv',
  icon: {
    "16" : "./mpv-16.png",
    "32" : "./mpv-32.png",
    "64" : "./mpv-64.png"
  },
  onClick: handleClick
});

function handleClick(state){
  console.log(state);
  console.log(tabs.activeTab.url);
  child_process.spawn('/usr/local/bin/mpv', [tabs.activeTab.url]);
}
