function countdownTimer(start, interval) {
    let current = start;

    const id = setInterval(() => {
        console.log(current);
        current--;

        if (current < 0) {
            clearInterval(id);
        }
    }, interval);
}

module.exports = { countdownTimer };
