"use strict";

load("readline.js");
load("Finch.js");

// Gain access to our finch
var finch = new Finch();

// -----------------------------------------------
// Don't change anything above the line

// Our first set of code will play one note,, wait 1 second, then play a different note
// finch.playTone(440, 1000);
// wait(1000);
// finch.playTone(220, 1000);
// wait(1000);

// Play a song
// Write your code here to play a song.  The array arr has the frequencies you will need to play
// The timing for each note is stored in the time array
//const arr = [329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 293.7, 293.7, 293.7, 329.6, 392, 392, 329.6, 293.7, 261.6, 293.7, 329.6, 329.6, 329.6, 329.6, 293.7, 293.7, 329.6, 293.7, 261.6];
//const time = [1000,1000,1000,1000,1000,1000,2000,1000,1000,2000,1000,1000,2000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]

//for(let num = 0; num <= arr.length; num += 1) {
//finch.playTone(arr[num], time[num]);
//wait(1000);
//}


// Create a sound & light show
// Write your own code here to create a light show of your choosing


finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);

finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(255, 0, 0);
finch.playTone(400, 1000);
wait(1000);
finch.setLED(130, 130, 0);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(255, 0, 255);
finch.playTone(200, 1000);
wait(1000);
finch.setLED(0, 255, 255);
finch.playTone(300, 1000);
wait(1000);
finch.setLED(0, 0, 255);
finch.playTone(400, 1000);
wait(1000);

function wait(msecs, buffer) {
    var buf = buffer ? buffer : 100;
    var time1 = new Date().getTime();
    var time2 = new Date().getTime();
    while (time2 < time1 + msecs + buf) {
        time2 = new Date().getTime();
    }
}
