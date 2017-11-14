"use strict";

load("readline.js");
load("Finch.js");

// Gain access to our finch
var finch = new Finch();

// -----------------------------------------------
// Don't change anything above the line

// Our first set of code will illuminate the Finch in one color, wait 1 second, then illuminate it in a different color
finch.setLED(255, 0, 0);
wait(1000);
finch.setLED(0, 255, 0);

// Traffic Light
// Write your code here to model 3 cycles of a traffic light


// Light show
// Write your own code here to create a light show of your choosing


function wait(secs, buffer) {
    var buf = buffer ? buffer : .1;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime();
    while (time2 < time1 + secs + buf) {
        time2 = new Date().getTime();
    }
}
