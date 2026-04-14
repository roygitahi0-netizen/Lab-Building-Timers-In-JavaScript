function delayedReminder(message, delay) {
    setTimeout(() => {
        console.log(message);
    }, delay);
}

module.exports = { delayedReminder };
