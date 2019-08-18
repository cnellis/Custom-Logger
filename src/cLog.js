/*  
    This code provides two useful functions for logging to the console:
        1. cLog: allows for simple CSS fore- and background coloring of messages in the console,
                 along with the option to save the message for later replay
        2. replayLog: replays any messages saved by cLog, complete with precise timestamps
    Author: Chris Nellis
    Version: 1.0.0
    Created: 8/15/2019
    Updated: -
*/

var savedMsgs = [];

// this function ensures all millisecond values in timestamps are three digits long for readability
var fillZero = function(num) { 
    if (num === 0) {
        return '000';
    } else {
        return num.toString().length<3 ? num+'0' : num;
    }
}

// provides a precidse (to the millisecond) timestamp when messages are replayed
var getTimestamp = function () {
    let ts = new Date();
    let hours = ts.getHours();
    let minutes = ts.getMinutes();
    let seconds = ts.getSeconds();
    let ms = ts.getMilliseconds();
    let dateString = hours + ':' + minutes + ':' + seconds + '.' + fillZero(ms) + ' >> ';
    return dateString;
}

/* logging function - accepts four params: 
    1. message to be logged to console (string)
    2. foreground color (string) - may be any valid CSS color value
    3. background color (string) - may be any valid CSS color value
    4. whether to save message for replay (boolean true/false)
*/
var cLog = function (msg, fgColor, bgColor, saveVal) {
    let msgStr = '%c ' + msg;
    let colorStr = 'background: ' + bgColor + '; color: ' + fgColor;
    if (saveVal === true) {
        tempArr = [msgStr, colorStr, getTimestamp()];
        savedMsgs.push(tempArr);
    }
    console.log(msgStr, colorStr);
}

// function to replay any messages that were saved by the cLog function (no params)
var replayLog = function () {
    for (i=0; i<savedMsgs.length; i++) {
        console.log(savedMsgs[i][2] + savedMsgs[i][0], savedMsgs[i][1]);
    }
}