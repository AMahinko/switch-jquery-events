/// Monitors light state
var lightOn = true;

/// Switch on/off button
function buttonSwitch () {
  lightOn = !lightOn;
  if (lightOn == false) {
    console.log("running light off");
    $('button').attr('class', 'switch off');
    $('body').attr('class', 'dark');
    $('.status').html('And now, the darkness holds dominion. Black as death.');

  }

  else {
    console.log("running light on");
    $('button').attr('class', 'switch on');
    $('body').attr('class', 'light');
    $('.status').html('The match is struck! A blazing star is born!');

  }
}


/// Button event handler
$('button').click(buttonSwitch);
