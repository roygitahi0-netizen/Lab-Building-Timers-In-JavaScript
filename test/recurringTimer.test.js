let intervalId;

function recurringTimer(message, interval) {
    intervalId = setInterval(() => {
        console.log(message);
    }, interval);
}

function stopRecurringTimer() {
    clearInterval(intervalId);
}

module.exports = { recurringTimer, stopRecurringTimer };