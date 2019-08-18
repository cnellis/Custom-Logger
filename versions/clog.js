var savedMsgs = [];

var fillZero = function(num) { 
    if (num === 0) {
        return '000';
    } else {
        return num.toString().length<3 ? num+'0' : num;
    }
}

var getTimestamp = function () {
    let ts = new Date();
    let hours = ts.getHours();
    let minutes = ts.getMinutes();
    let seconds = ts.getSeconds();
    let ms = ts.getMilliseconds();
    let dateString = hours + ':' + minutes + ':' + seconds + '.' + fillZero(ms) + ' >> ';
    return dateString;
}

var cLog = function (msg, fgColor, bgColor, saveVal) {
    let msgStr = '%c ' + msg;
    let colorStr = 'background: ' + bgColor + '; color: ' + fgColor;
    if (saveVal === true) {
        tempArr = [msgStr, colorStr, getTimestamp()];
        savedMsgs.push(tempArr);
    }
    console.log(msgStr, colorStr);
}

var replayLog = function () {
    for (i=0; i<savedMsgs.length; i++) {
        console.log(savedMsgs[i][2] + savedMsgs[i][0], savedMsgs[i][1]);
    }
}