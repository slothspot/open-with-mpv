var child_process = require('sdk/system/child_process');
var buttons = require('sdk/ui/button/action');
var tabs = require('sdk/tabs');
var settings = require('sdk/simple-prefs');

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
  console.log(tabs.activeTab.url);
  var mpvExec = settings.prefs.mpvPath;
  child_process.spawn(mpvExec, [tabs.activeTab.url]);
}
