const idleTimeInSeconds = 15;
let completedTimeInSeconds = 0;

const intervalFunc = setInterval(timer, 1000);

function timer() {
    const timeLeftInSeconds = (idleTimeInSeconds - completedTimeInSeconds) % 60;

    const timeLeftInMinutes = parseInt((idleTimeInSeconds - completedTimeInSeconds) / 60);

    const timeStr = appendZero(timeLeftInMinutes) + ':' + appendZero(timeLeftInSeconds);

    if (idleTimeInSeconds < completedTimeInSeconds) {
        clearInterval(intervalFunc);
        postMessage('Your session has been completed, Please Login');
    } else {
        postMessage(timeStr);
        completedTimeInSeconds++;
    }
}

function appendZero(value) {
    return value.toString().length === 1 ? '0' + value : value; 
}