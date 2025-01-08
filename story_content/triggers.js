function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kC8KRGhkBh":
        Script1();
        break;
      case "5Uu8A9RjsQg":
        Script2();
        break;
      case "5e2RtLqHcTJ":
        Script3();
        break;
      case "6DX5XY0GHM8":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('6d4aKExsbFI');
const duration = 750;
const easing = 'ease-out';
const id = '5X9zsGJ2PBI';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6GNUCFyYDFb');
const duration = 750;
const easing = 'ease-out';
const id = '6GRsT7Vp2fD';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5lPp2Zogza3');
const duration = 750;
const easing = 'ease-out';
const id = '5Yby7FZ5zp6';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('6ihlHvcdBjN');
const duration = 750;
const easing = 'ease-out';
const id = '5lZJmyxfADd';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
